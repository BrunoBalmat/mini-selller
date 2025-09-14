import { useQueryState } from "nuqs";
import { useState, type FormEvent, type ChangeEvent } from "react";

import { QUERY_PARAMS } from "@/shared/constants";

export function useSearchLead() {
	const [search, setSearch] = useQueryState(QUERY_PARAMS.SEARCH, {
		defaultValue: "",
	});

	const [value, setValue] = useState(search);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSearch(value);
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return { setValue, value, onSubmit, onChange };
}
