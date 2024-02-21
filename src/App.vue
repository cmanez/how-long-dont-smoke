<template>
 <component :is="$route.meta.layout || 'MainLayout'" >
    <Transition name="fade" appear mode="out-in">
      <div class="main-wrapper" :key="$route.path">
       <router-view  />
      </div>
    </Transition>
  </component>
</template>

<style lang="scss" scoped>
.main-wrapper{
  display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

