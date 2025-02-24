import {ParsingMetadata} from 'root/app/log-parser/model';
import {Request} from 'root/app/request';

export async function getParsingMetadata(): Promise<ParsingMetadata> {
  const res = await Request.get(`/snap/json/parsing_metadata.json`);
  if (typeof res === 'string') {
    throw new Error('Cannot parse remote metadata');
  }
  return res as ParsingMetadata;
}
