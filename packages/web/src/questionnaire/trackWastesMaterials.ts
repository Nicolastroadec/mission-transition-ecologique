import type { Track } from '@/types'
import { Objectives, TrackComponent, TrackId, YesNo } from '@/types'

export const wastesMaterials: Track = {
  id: TrackId.WastesMaterials,
  category: 'myWastes',
  title: { fr: 'Matières premières' },
  label: {
    fr: 'Avez-vous pour objectif de réduire vos pertes de matières premières ?'
  },
  interface: {
    component: TrackComponent.Buttons
  },
  behavior: {
    multipleChoices: false
  },
  next: {
    default: TrackId.Results
  },
  options: [
    {
      value: YesNo.Yes,
      questionnaireData: { wastes_materials: YesNo.Yes, [Objectives.EcoDesign]: YesNo.Yes },
      title: { fr: 'Oui' },
      label: { fr: '👍 Oui, nous aimerions limiter nos pertes de matières premières' },
      next: {
        default: TrackId.WaterStake
      }
    },
    {
      value: YesNo.No,
      questionnaireData: { wastes_materials: YesNo.No, [Objectives.EcoDesign]: YesNo.No },
      title: { fr: 'Non' },
      label: { fr: '❌ Non, pas vraiment' },
      next: {
        default: TrackId.WaterStake
      }
    },
    {
      value: YesNo.Unknown,
      questionnaireData: { wastes_materials: YesNo.Unknown, [Objectives.EcoDesign]: YesNo.Yes },
      title: { fr: 'Je ne sais pas' },
      label: { fr: 'Je ne sais pas / Je ne suis pas concerné' },
      next: {
        default: TrackId.WaterStake
      }
    }
  ]
}
