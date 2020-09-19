export interface apiData {
  content: string;
  isLoading: boolean;
  error: Record<string, unknown> | null;
}

export interface filters {
  typ: string | null;
  nr_drogi: string | null;
  woj: string | null;
  droga_zamknieta: boolean | null;
}

export interface userFilters {
  isLoading: boolean;
  content: filters | null;
}

export interface xmlObject {
  isLoading: boolean;
  lastUpdate: string | null;
  accidents: Record<string, string | null>[] | undefined;
}
