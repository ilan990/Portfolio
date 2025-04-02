import { Card } from "@/components/ui/card"
import { Section } from "./Section"

export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-6">
        <div className="flex-[3] flex flex-col gap-4 w-full">
        <Card className="p-4 flex flex-col gap-2 w-full">
        <p className="text-lg text-muted-foreground w-full">Fun projects</p>
        </Card>
        </div>
        <div className="flex-[2] flex flex-col gap-4 w-full">
            <Card className="p-4 flex-1">
                Work
            </Card>
            <Card className="p-4 flex-1">
                Contact me
            </Card>
        </div>
    </Section>
}