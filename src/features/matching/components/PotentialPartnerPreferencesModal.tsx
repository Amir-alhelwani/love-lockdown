import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PartnerPreferences } from "@/types/partnerPreferences";
import { Heart } from "lucide-react";
const PotentialPartnerPreferencesModal = ({
  data,
}: {
  data: PartnerPreferences;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="icon">
          <Heart className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Partner Preferences
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[500px] grid gap-4 py-1">
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">body type:</span>
            <span className="flex-1">{data.bodyType}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">
              commitment Level:
            </span>
            <span className="flex-1">{data.commitmentLevel}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">
              favorite Holiday Destination:
            </span>
            <span className="flex-1">{data.favoriteHolidayDestination}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">max Age:</span>
            <span className="flex-1">{data.maxAge}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">min Age:</span>
            <span className="flex-1">{data.minAge}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">pet:</span>
            <span className="flex-1">{data.pet}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">free Times:</span>
            <span className="flex-1">{data.freeTime.join(", ")}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">gender:</span>
            <span className="flex-1">{data.gender.join(", ")}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">
              personal Believes:
            </span>
            <span className="flex-1">{data.personalBelieves.join(", ")}</span>
          </p>
          <p className="py-1 flex justify-between items-start">
            <span className="font-bold capitalize flex-1">music Genres:</span>
            <span className="flex-1">{data.musicGenres.join(", ")}</span>
          </p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PotentialPartnerPreferencesModal;
