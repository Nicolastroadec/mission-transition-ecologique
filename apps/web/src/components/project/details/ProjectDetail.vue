<template>
  <ProjectHeader
    v-if="project"
    :project="project"
    :theme-color="themeColor as Color"
  />
  <div
    v-if="project"
    class="fr-col-12"
  >
    <div class="fr-container">
      <div class="fr-grid-row">
        <div class="fr-col-3 fr-col-hidden fr-col-unhidden-md fr-mt-4v">
          <TeeCopyLinkButton class="fr-mx-4v" />
          <ProjectSideNav :project="project" />
        </div>
        <div class="fr-col-12 fr-col-md-9">
          <ProjectDescription :project="project" />
          <ProjectPrograms
            v-if="project"
            :project="project"
          />
          <LinkedProjects
            v-if="project.linkedProjects.length > 0"
            :project="project"
            :color="themeColor as Color"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Project, Color, ThemeId } from '@/types'
import { MetaSeo } from '@/utils/metaSeo'
import { Theme } from '@/utils/theme'
import { useProjectStore } from '@/stores/project'
import { onBeforeMount } from 'vue'

const projectStore = useProjectStore()

const project = ref<Project>()
const themeColor = ref<Color | ''>()

interface Props {
  projectSlug: string
  programId?: number
}
const props = defineProps<Props>()

onBeforeMount(async () => {
  if (props.projectSlug !== projectStore.currentProject?.slug) {
    await projectStore.getProjectBySlug(props.projectSlug)
  }

  project.value = projectStore.currentProject

  const selectedThemeId = Theme.getThemeFromSelectedOrPriorityTheme()

  if (project.value) {
    const themeId = selectedThemeId.value ? project.value?.themes.find((t) => t === selectedThemeId.value) : project.value?.mainTheme

    themeColor.value = Theme.getColorById(themeId as ThemeId)
  }

  useSeoMeta(MetaSeo.get(project.value?.title, project.value?.shortDescription, project.value?.image))
})

onBeforeRouteLeave(() => {
  useSeoMeta(MetaSeo.default())
})
</script>
