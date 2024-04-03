/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prettier/prettier */
import { ComponentProps } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

import { Button, TooltipContainer } from "./styles";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export interface TooltipProps extends ComponentProps<typeof Tooltip.Provider> {
  date: Date;
  status: boolean;
}

export function TooltipComponent({ date, status, ...props }: TooltipProps) {
  // @ts-ignore
  const currentDate = format(date, "dd 'de' MMMM", { locale: ptBR });

  return (
    <Tooltip.Provider {...props}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button active={status} className="IconButton">
            {format(date, "dd")}
          </Button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <TooltipContainer
            className="TooltipContent"
            alignOffset={1}
            data-align="center"
            sideOffset={1}
            side="top"
          >
            {currentDate} -{status ? " Disponível" : " Indisponível"}
            <Tooltip.Arrow className="TooltipArrow" />
          </TooltipContainer>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

TooltipComponent.displayName = "Tooltip";
