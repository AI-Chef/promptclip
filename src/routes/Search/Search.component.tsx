import React, { useEffect } from "react";
import { getPrompts } from "../../utils/database";
import SearchInput from "./SearchInput/SearchInput.component";
import Actions from "./Actions/Actions.component";
import { Divider } from '@chakra-ui/react'
import Prompts from "../Search/Prompts/Prompts.component";
import { PromptsContext } from "../../contexts/prompts.context";
import { setWindowSizeToBody } from "../../utils/window";

const Search = () => {
  const { prompts, setPrompts } = React.useContext(PromptsContext);
  useEffect(() => {
    (async () => {
      setPrompts(await getPrompts("used"));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await setWindowSizeToBody();
    })();
  }, [prompts]);

  const refreshPrompts = async () => {
    setPrompts(await getPrompts("used"));
  }

  return (
    <div className="searchWindow">
      <SearchInput />
      <Divider width="728px" borderColor="#7D7A75" marginTop="5px" marginBottom="10px" marginLeft={0} />
      <Prompts prompts={prompts} refreshPrompts={refreshPrompts} />
      <Divider width="728px" borderColor="#7D7A75" marginTop="5px" marginBottom="15px" marginLeft={0} />
      <Actions />
    </div>
  )
}

export default Search;
