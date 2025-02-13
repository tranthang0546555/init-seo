import NotFound from '@/components/NotFound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404',
  description: 'Not found',
}

export default function NotFoundPage() {
  return <NotFound />
}
