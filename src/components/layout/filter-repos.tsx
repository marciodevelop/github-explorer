import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "../ui/input-group";

export function FilterRepos(params: type) {
  return (
    <div className="w-full flex justify-between">
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <Search className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
