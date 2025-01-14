"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";  // Update import path to shadcn/ui dialog
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";  // Update import path
import { CommandIcon } from "lucide-react";
import { commandIcon } from "@/app/utils/icons";

function SearchButton() {
  return (
    <div className="search-btn">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border inline-flex items-center justify-between w-full text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100 ease-in-out duration-200"
          >
            <p className="text-sm text-muted-foreground">Search Here...</p>
            <div className="command dark:bg-[#262626] bg-slate-200 py-[2px] pl-[5px] pr-[7px] rounded-sm flex items-center gap-2">
              {commandIcon}
              <span className="text-[9px]">F</span>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className="p-0">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <ul className="px-3 pb-2">
              <p className="p-2 text-sm text-muted-foreground">suggestion</p>
            </ul>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SearchButton;