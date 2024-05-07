<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-6 g-6 my-1">
      <div class="col" v-for="surat in all_surat">
        <div class="card mt-3" @click="detailSurat(surat.nomor)">
          <div class="card-body">
            <h5 class="card-title">{{surat.namaLatin}} ({{surat.arti}})</h5>
            <h3>{{surat.nama}}</h3>
              <p>
                <span class="small text-muted">
                  Surat ke : {{surat.nomor}} ({{surat.tempatTurun}})
                </span>&nbsp;&nbsp;
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        all_surat: [],
      }
    },
    mounted() {
      this.getAllSurat()
    },
    methods: {
      getAllSurat(){
        this.$http.get('https://equran.id/api/v2/surat')
        .then(ress => {
          this.all_surat = ress.data.data
        })
      },
      detailSurat(data) {
        this.$router.push({ name: 'SuratDetail', params: { id: data } })
      }
    },
  }
</script>