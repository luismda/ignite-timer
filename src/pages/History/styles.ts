import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 768px) {
    padding: 3.5rem 0;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 17.5rem;
  overflow: auto;
  margin-top: 2.5rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      position: sticky;
      top: 0;
      background: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }

    tr {
      &:last-child td:first-child {
        border-bottom-left-radius: 8px;
      }

      &:last-child td:last-child {
        border-bottom-right-radius: 8px;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-600']};
    border-radius: 100px;
    box-shadow: inset 0 0 1px ${(props) => props.theme['gray-900']};
  }
`

export const HistoryEmpty = styled.div`
  flex: 1;
  background: ${(props) => props.theme['gray-700']};

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const STATUS_COLOR = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
