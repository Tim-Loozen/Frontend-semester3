<script setup>

import Navbar from "@/components/general/navbar.vue";
</script>
<template>
  <navbar></navbar>
  <section class="header">
    <img src="/public/pexels-artem-podrez-5025669.jpg" alt="">
  </section>
  <section class="py-5 text-start">
    <div class="container">
      <div class="row">
        <div class="col-6">

          <img src="/public/new-assets/PPT_Logo_zonder_background.png" style="width: auto;" height="75" alt="">
          <h4 class="text-black text-secondary">Het post plaform voor zzp'ers</h4>
          <h1 class="text-black ">Zzp post platform</h1>
          <p>Welkom bij PakketPostThuis, het toonaangevende platform dat zzp'ers en postbedrijven met elkaar verbindt.
            Hier
            vind je de perfecte gelegenheid om je zakelijke activiteiten uit te breiden en betrouwbare partners te
            vinden. Onze gebruiksvriendelijke interface en geavanceerde zoekfuncties zorgen ervoor dat je snel en
            efficiënt kunt navigeren door ons uitgebreide netwerk.</p>
          <a type="button" href="#stappeplan" class="btn btn-primary my-3">Neem contact op</a>
        </div>
        <div class="offset-2 col-4">
          <div class="text-start">
            <h2 class="">Voordelen</h2>
            <ul>
              <li>
                <p><strong>Flexibiliteit:</strong> Werk waar en wanneer je maar wilt. Geen vaste uren of strakke
                  schema's. U beslist
                  wanneer u banen accepteert en creëert een perfecte balans tussen werk en privéleven.</p>
              </li>
              <li>
                <p><strong>Onbeperkt Verdienpotentieel:</strong> Als zelfstandige koerier zijn uw inkomsten recht evenredig met de
                  inspanningen die u levert. Hoe meer leveringen u voltooit, hoe meer u verdient!</p>
              </li>
              <li>
                <p><strong>Gebruiksvriendelijke app:</strong> onze gebruiksvriendelijke mobiele app maakt het moeiteloos om beschikbare routes te vinden, uw planning te beheren en uw inkomsten bij te houden. Alle tools die je nodig hebt om te slagen zijn binnen handbereik!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>
