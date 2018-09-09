import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: true
})

export class FilterPipe implements PipeTransform {

    transform(logs: any[], searchLog: any): any[] {
        if (!logs) return [];
        if (!searchLog) return logs;
        searchLog = searchLog.toString().toLowerCase();
        return logs.filter(it => {
            return it.toString().toLowerCase().includes(searchLog);
        });
    }

}