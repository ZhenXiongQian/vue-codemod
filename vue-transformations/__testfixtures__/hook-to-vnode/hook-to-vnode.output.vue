<template>
  <div>
    <p @vnode-created='onCreated' @vnode-mounted='OnMounted' @vnode-updated='onUpdated'>{{msg}}</p>
    <button @click='change'></button>
  </div>
</template>
