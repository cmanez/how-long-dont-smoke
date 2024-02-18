<template>
 <component :is="$route.meta.layout || 'MainLayout'" >
        <router-view  />
      </component>
</template>
