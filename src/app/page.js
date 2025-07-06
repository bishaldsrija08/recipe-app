import Card from "./components/card";

export default function Home() {
  return (
<div className="flex flex-wrap justify-center gap-4 p-4">
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/> 
</div>
  )
}

// DATABASE_URL="postgresql://postgres.cnoxfbfzpqcusyhhdixz:[YOUR-PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"