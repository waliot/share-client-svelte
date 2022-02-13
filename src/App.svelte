<script>
  import { Map, TileLayer } from "leaflet"
  import { MAP_CENTER } from "@waliot-oss/share-client-sdk"
  import { onMount } from "svelte"
  import ZoomControls from "./ZoomControls.svelte"
  import Card from "./components/Card.svelte"

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

<div class="card-container">
  <Card>
    <svelte:fragment slot="header">
      <p class="card-title"><strong>Сэм 🛰👾💀</strong></p>
      <p class="card-description">потеря связи 4 д. 8 ч.</p>
    </svelte:fragment>

    <ul class="card-content">
      <li class="card-content-item">
        <span class="item-property">Модель</span>
        <span class="item-value">АДМ 50 - Трекер 1</span>
      </li>
    </ul>

    <p class="tracking-object-address">Первая Мониторинговая Компания, ГЛОНАСС, улица Силантьева, 80/1, Краснодар, городской округ Краснодар, Краснодарский край</p>
  </Card>
</div>
<ZoomControls on:zoomChange={e => onZoomChange(e)} />
<div id="map-container" bind:this={mapElementRef}></div>

<style>
  :global(body) {
    font-size: 14px;
  }

  #map-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .card-container {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    margin-right: 20px;
    margin-top: 14px;
  }

  .card-container :global(.card) {
    width: 250px;
  }

  .card-content {
    width: 250px;
    margin: 0;
    padding: 0;
  }

  .card-content-item {
    padding: 6px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid hsl(199deg 18% 33%);
  }

  span.item-property {
    color: hsl(0deg 0% 100% / 70%);
  }

  .tracking-object-address {
    padding: 6px 20px;
    font-size: 12px;
    line-height: 14px;
    color: hsl(207deg 90% 54%);
    text-align: left;
    margin: 0;
  }
</style>
