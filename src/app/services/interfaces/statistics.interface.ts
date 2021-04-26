import { Observable } from 'rxjs';

export interface Statistic {
    key: string;
	label: string;
	color: string;
	value?: number;
}

export interface StatisticsGroup extends Statistic {
	statistics: Statistic[]
}

export interface StatisticsService {

   getStatistics(key?: string): Observable<Statistic[]>;

}
