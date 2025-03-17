import MainLayout from "@/components/layout/MainLayout";

export default function NHLAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
