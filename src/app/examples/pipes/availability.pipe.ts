import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability',
})
export class AvailabilityPipe implements PipeTransform {
  transform(isAvailable: boolean): 'available' | 'not available' {
    return isAvailable ? 'available' : 'not available';
  }
}
