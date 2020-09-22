export interface apiData {
  content: string;
  isLoading: boolean;
  error: Record<string, unknown> | null;
}

export interface filters {
  typ: string[];
  nr_drogi: string[];
  woj: string[];
  droga_zamknieta: string[];
}

export interface userFilters {
  isLoading: boolean;
  content: filters;
}

export interface xmlObject {
  isLoading: boolean;
  lastUpdate: string | null;
  accidents: Record<string, string | null>[] | undefined;
}
