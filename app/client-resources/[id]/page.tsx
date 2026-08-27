import React from 'react';
import { notFound } from 'next/navigation';
import { ResourceDetailPageContent } from '@/components/sections/ResourceDetailPageContent';
import { LexoraTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function ClientResourceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;

  if (!templateData || !sectionData?.clientResources?.variants?.LexoraClientResources1) {
    notFound();
  }

  const items = sectionData?.clientResources?.variants?.LexoraClientResources1?.featuredSection?.items || [];
  const normalizedId = (id || '').toLowerCase();
  const resource = items.find((i) => {
    const s = (i.slug || '').toLowerCase();
    const itemId = (i.id || '').toLowerCase();
    return s === normalizedId || itemId === normalizedId;
  });

  if (!resource) {
    notFound();
  }

  return <ResourceDetailPageContent templateData={templateData} id={id} />;
}
