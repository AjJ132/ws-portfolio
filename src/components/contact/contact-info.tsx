import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { LINKEDIN_LINK } from '@/data/contact-info';
import { Github, Linkedin, Twitter, MapPin, Mail, Phone, Clock } from 'lucide-react';

export default async function ContactInfo() {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
          <div className="space-y-1">
            <Label>Location</Label>
            <p className="text-sm">Kennesaw, GA</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-muted-foreground mt-1" />
          <div className="space-y-1">
            <Label>Email</Label>
            <a 
              href="mailto:aj132@icloud.com" 
              className="text-sm block hover:text-primary transition-colors"
            >
              aj132@icloud.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-muted-foreground mt-1" />
          <div className="space-y-1">
            <Label>Phone</Label>
            <p className="text-sm">706-436-1212</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-muted-foreground mt-1" />
          <div className="space-y-1">
            <Label>Working Hours</Label>
            <p className="text-sm">Mon - Fri: 8:00 AM - 12:00 PM EST</p>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Social Media</Label>
          <div className="flex flex-col space-y-2">
            <a 
              href="https://github.com/ajj132" 
                target='_blank'
              className="flex items-center space-x-2 text-sm p-2 rounded-md hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>Follow on GitHub</span>
            </a>
            <a 
              href={`${LINKEDIN_LINK}`}
              target='_blank'
              className="flex items-center space-x-2 text-sm p-2 rounded-md hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5 text-[#0077B5]" />
              <span>Connect on LinkedIn</span>
            </a>
            
          </div>
        </div>
      </CardContent>
    </Card>
  );
}