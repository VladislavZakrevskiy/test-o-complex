"use client";
import { Input } from "@/components/ui";
import { useBasketStore } from "@/store/BasketStore";
import React, { useEffect, useRef } from "react";
import Inputmask from "inputmask";

export const NumberInput = () => {
	const { number, changeNumber } = useBasketStore();

	const codeMask = (number: string) => {
		const splittedNumber = number.split("");
		const maskedNumber = `+${splittedNumber[0] ? splittedNumber[0] : "_"} (${
			splittedNumber[1] ? splittedNumber[1] : "_"
		}
${splittedNumber[2] ? splittedNumber[2] : "_"}
${splittedNumber[3] ? splittedNumber[3] : "_"}) ${splittedNumber[4] ? splittedNumber[4] : "_"}
${splittedNumber[5] ? splittedNumber[5] : "_"}
${splittedNumber[6] ? splittedNumber[6] : "_"} 
${splittedNumber[7] ? splittedNumber[7] : "_"}
${splittedNumber[8] ? splittedNumber[8] : "_"}_
${splittedNumber[9] ? splittedNumber[9] : "_"}
${splittedNumber[10] ? splittedNumber[10] : "_"}`;
		return maskedNumber;
	};
	const decodeMask = (maskedNumber: string) => {
		let decoded = maskedNumber.match(/(-?\d+(\.\d+)?)/g)?.map((v) => +v);
		return decoded?.join("");
	};

	return (
		<Input
			onChange={(newNumber) => {
				const decoded = decodeMask(newNumber) || "7";
				if (decoded.length > 11) return;
				changeNumber(decoded);
			}}
			value={codeMask(number)}
			className="text-start"
		/>
	);
};
