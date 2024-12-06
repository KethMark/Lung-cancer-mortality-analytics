import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ModeToggle } from "./mode-toggle"

export function SidebarOptInForm() {
  return (
    <Card className="shadow-none">
      <form>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm">Lung cancer mortality</CardTitle>
          <CardDescription>
            Refers to the number of deaths caused by lung cancer.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <ModeToggle/>
        </CardContent>
      </form>
    </Card>
  )
}