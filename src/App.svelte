<script>
  import { Map, TileLayer } from "leaflet"
  import { MAP_CENTER } from "@waliot-oss/share-client-sdk"
  import { onMount } from "svelte"
  import ZoomControls from "./ZoomControls.svelte"

  /** @type {HTMLElement} */
  let mapElementRef

  /** @type {Map} */
  let map

  onMount(() => {
    map = new Map(mapElementRef, {
      layers: [
        new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
      ],
      center: MAP_CENTER,
      zoom: 11,
      zoomControl: false,
      zoomAnimation: false
    })
  })

  function onZoomChange(event) {
    switch (event.detail.type) {
      case "IN": {
        map.setZoom(map.getZoom() + 1)
        break
      }
      case "OUT": {
        map.setZoom(map.getZoom() - 1)
        break
      }
      default: {
        throw new Error(`Unsupported zoom type: "${ event.detail.type }"`)
      }
    }
  }
</script>

<main class="app">
  <ZoomControls on:zoomChange={e => onZoomChange(e)} />
  <div id="map-container" bind:this={mapElementRef}></div>
</main>

<style>
  #map-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>
