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
    max-width: 70rem;
    max-height: 45rem;
}
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

