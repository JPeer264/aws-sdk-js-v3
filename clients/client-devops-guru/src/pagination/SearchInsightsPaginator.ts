import { Paginator } from "@aws-sdk/types";

import {
  SearchInsightsCommand,
  SearchInsightsCommandInput,
  SearchInsightsCommandOutput,
} from "../commands/SearchInsightsCommand";
import { DevOpsGuru } from "../DevOpsGuru";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: SearchInsightsCommandInput,
  ...args: any
): Promise<SearchInsightsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchInsightsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: SearchInsightsCommandInput,
  ...args: any
): Promise<SearchInsightsCommandOutput> => {
  // @ts-ignore
  return await client.searchInsights(input, ...args);
};
export async function* paginateSearchInsights(
  config: DevOpsGuruPaginationConfiguration,
  input: SearchInsightsCommandInput,
  ...additionalArguments: any
): Paginator<SearchInsightsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchInsightsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DevOpsGuru) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
