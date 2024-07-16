import { PublicodeObjective, QuestionnaireRoute } from '../questionnaire/types/types'

export type Opportunity = ContactDetails & OpportunityDetails

export interface ContactDetails {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  companySiret: string
  companyName?: string | null
  companySector?: string
  companySize?: number
}

export enum OpportunityType {
  Program = 'program',
  Project = 'project'
}

export interface OpportunityDetails {
  type: OpportunityType
  id: string
  linkToPage: string
  message: string
  questionnaireRoute?: QuestionnaireRoute
  priorityObjectives?: PublicodeObjective[]
  otherData?: string
}

export interface OpportunityBody {
  opportunity: Opportunity
  optIn: boolean
}

export type ProjectOpportunity = ContactDetails & ProjectOpportunityDetails

export interface ProjectOpportunityDetails {
  projectId: number
  linkToProjectPage: string
  message: string
  questionnaireRoute?: QuestionnaireRoute
  priorityObjectives?: PublicodeObjective[]
  otherData?: string
}

export interface ProjectBody {
  project: ProjectOpportunity
  optIn: boolean
}
