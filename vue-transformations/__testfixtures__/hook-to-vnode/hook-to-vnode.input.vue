<template>
  <div>
    <p @hook:created='onCreated' @hook:mounted='OnMounted' @hook:updated='onUpdated'>{{msg}}</p>
    <button @click='change'></button>
  </div>
</template>
