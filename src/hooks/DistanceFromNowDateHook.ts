import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function DistanceFromNowDateHook(createdAt: string) {
  const newDate = new Date(createdAt)

  const dateRelativeToNow = formatDistanceToNow(newDate, {
    locale: ptBR,
    addSuffix: true,
  })

  return dateRelativeToNow
}
