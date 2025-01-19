'use client'

import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const HeroButtons = () => {
  return (
    <div className="flex gap-6 pt-4">
      <Button size="lg" className="text-lg px-8" onClick={() => window.location.href = '/about'}>
        About Me <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => window.location.href = '/contact'}>
        Get in Touch
      </Button>
    </div>
  )
}

export default HeroButtons