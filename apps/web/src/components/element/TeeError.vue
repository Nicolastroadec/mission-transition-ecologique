<template>
  <div class="fr-text-center">
    <p class="fr-text--red fr-text--md fr-m-0">
      <v-icon
        name="ri-close-circle-fill"
        aria-hidden="true"
        scale="3"
      />
    </p>
    <h4 class="fr-text--red fr-m-0 fr-mb-2v">
      {{ Translation.t(`form.sorryError`) }}
    </h4>
    <slot />
    <h6 class="fr-text--blue-france fr-mt-15v fr-mb-3v">
      {{ Translation.t('form.nowWhat') }}
    </h6>
    <p class="fr-text--blue-france fr-mb-15v">
      <span v-html="Translation.ti(Translation.t('form.errorMsg'), { mailto: mailto, email: email })" />
    </p>
  </div>
</template>

<script setup lang="ts">
import Translation from '@/utils/translation'

interface Props {
  mailto: string
  email: string
}
defineProps<Props>()
</script>
