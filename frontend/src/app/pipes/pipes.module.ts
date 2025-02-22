import { NgModule } from '@angular/core';


// Pipes
import {FhirPathPipe} from './fhir-path.pipe';
import {FilterPipe} from './filter.pipe';
import { ShortDomainPipe } from './short-domain.pipe';
import { DatasetLatestEntryPipe } from './dataset-latest-entry.pipe';
import { HumanNamePipe } from './human-name.pipe';
import { ReferenceUriPipe } from './reference-uri.pipe';
import { FastenDisplayModelPipe } from './fasten-display-model.pipe';

@NgModule({
  declarations: [

    FhirPathPipe,
    FilterPipe,
    ShortDomainPipe,
    DatasetLatestEntryPipe,
    HumanNamePipe,
    ReferenceUriPipe,
    FastenDisplayModelPipe,
  ],
  imports: [

  ],
  exports: [
    FhirPathPipe,
    FilterPipe,
    ShortDomainPipe,
    DatasetLatestEntryPipe,
    HumanNamePipe,
    ReferenceUriPipe,
    FastenDisplayModelPipe
  ]
})
export class PipesModule {}
