import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  SET_ACTIVE_CYCLE_ID = 'SET_ACTIVE_CYCLE_ID',
}

type AddNewCycleActionReturnProps = ReturnType<typeof addNewCycleAction>
type InterruptCurrentCycleActionReturnProps = ReturnType<
  typeof interruptCurrentCycleAction
>
type MarkCurrentCycleAsFinishedActionReturnProps = ReturnType<
  typeof markCurrentCycleAsFinishedAction
>
type SetActiveCycleIdActionReturnProps = ReturnType<
  typeof setActiveCycleIdAction
>

export type Action =
  | AddNewCycleActionReturnProps
  | InterruptCurrentCycleActionReturnProps
  | MarkCurrentCycleAsFinishedActionReturnProps
  | SetActiveCycleIdActionReturnProps

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  } as const
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  } as const
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  } as const
}

export function setActiveCycleIdAction(cycleId: string | null) {
  return {
    type: ActionTypes.SET_ACTIVE_CYCLE_ID,
    payload: {
      cycleId,
    },
  } as const
}
