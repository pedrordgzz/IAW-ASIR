import InstitutoContent from '@/components/InstitutoContent';

type Props = {
  params: Promise<{ seccion: string }>;
};

export default async function Home({ params }: Props) {
  const { seccion } = await params;

  return <InstitutoContent modalId={seccion} />;
}