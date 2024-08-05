import type { Metadata } from 'next'

import { ContactView } from '@/views/contact'

export const metadata: Metadata = {
  title: 'Contact',
}

export default async function ContactPage() {
  return <ContactView />
}
