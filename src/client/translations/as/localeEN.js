export default {
  languageLabel: 'English',
  appTitle: {
    short: 'AcademySampo',
    long: 'AcademySampo',
    subheading: `
      Finnish Academic People 1640&ndash;1899
    `
  },
  appDescription: `

  `,
  selectPerspective: 'Select a perspective to search and browse the knowledge graph:',
  mainPageImageLicence: 'Images used under license from Wikimedia Commons',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Project homepage',
      blogUrl: 'https://seco.cs.aalto.fi/projects/yo-matrikkelit/',
      aboutThePortal: 'About the Portal'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    activeFilters: 'Active filters:',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Filter options',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Sorting options',
    sortAlphabetically: 'Sort alphabetically',
    sortByNumberOfSearchResults: 'Sort by number of search results',
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Search...',
    applyFacetSelection: 'apply',
    pieChart: {
      tooltip: 'Pie chart'
    },
    barChart: {
      tooltip: 'Bar chart',
      language: {
        title: 'Language',
        xaxisTitle: 'Language',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    },
    lineChart: {
      tooltip: 'Line chart',
      productionTimespan: {
        title: 'Manuscript production by decade',
        xaxisTitle: 'Decade',
        yaxisTitle: 'Manuscript count',
        seriesTitle: 'Manuscript count'
      }
    }
  },
  tabs: {
    table: 'table',
    map: 'map',
    migrations: 'migrations',
    network: 'network',
    //  pointcloud: 'point cloud',
    familyNetwork: 'Family relations',
    academicNetwork: 'Academic relations',
    relationNetwork: 'Relations',
    connections: 'Connections',
    by_year: 'by year',
    placeByYear: 'Timeline of events',
    placeMap: 'Map',
    titleByYear: 'Timeline',
    export: 'export',
    nationByYear: 'by year',
    'by-period': 'by period'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  lineChart: {
    Birth: 'Birth',
    Enrollment: 'Enrollment',
    Death: 'Death',
    Event: 'Event'
  },
  exportToYasgui: 'open the result table query in yasgui sparql editor',
  openInLinkedDataBrowser: 'open in linked data browser',
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        This landing page provides a human-readable summary of the data points that link
        to this {entity}. The data included in this summary reflect only those data points
        used in the AcademySampo Portal. Click the Open in Linked Data Browser on button on the
        Export tab to view the complete set of classes and properties linked to this record.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        To cite this record, use its url. You can use also use the url to return directly
        to the record at any time.
      </p>
    `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Computationally generated data
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Plenty of the data is computationally generated, 
        especially for the family relative and vocation information.
        There might be missing, erroneous, or repeting data records
        due to the errors or unadequate amount of source data.
      </p>
    `
  },
  deckGlMap: {
    arcColouring: 'Arc colouring:',
    showMoreInformation: 'Click to show more information.',
    peopleMigrations: {
      legendTitle: 'Arc colouring',
      legendFrom: 'Place of birth',
      legendTo: 'Place of death',
      from: 'Place of birth:',
      to: 'Place of death:',
      count: 'Number of people:',
      listHeadingSingleInstance: 'Person:',
      listHeadingMultipleInstances: 'People:'
    }
  },
  perspectives: {
    people: {
      label: 'People',
      facetResultsType: 'people',
      shortDescription: 'Browse the data of 28000 students and their relatives',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the students in the dataset.
          The data is converted from two main sources:
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/" target="_blank" rel="noopener noreferrer">Ylioppilasmatrikkeli 1640–1852</a>: 
            containing approx. 18000 student records collected by Yrjö Kotivuori.
            </li>
            <li>
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/1853-1899/" target="_blank" rel="noopener noreferrer">Ylioppilasmatrikkeli 1853–1899</a>: 
            containing approx. 9500 student records collected by Veli-Matti Autio.
            </li>
          </ul>
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          General information about the project is available at the <a href="https://seco.cs.aalto.fi/projects/yo-matrikkelit/"  target="_blank" rel="noopener noreferrer">project blog</a>.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the students in the dataset.
          See <a href="/instructions">instructions</a> for using the
          filters. The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all students in
            the AcademySampo data. One table row is equivalent to one student.
            Wikidata/Wikimedia Commons is used as the image source.
          </li>
          <li>
            <strong>BY YEAR</strong> is a timeline chart showing the yearly number of students 
            born, enrolled to the University, or deceased.
          </li>
          <li>
            <strong>MIGRATIONS</STRONG> view shows the connection
            between the places of birth and death.
          </li>
          <li>
            <strong>MAP</strong> is a map visualization showing the known locations of activities, e.g. places of studying, work or living.
          </li>
          <li>
            <strong>NETWORK</strong> is a social network visualization showing the Teacher-Student relationships. 
              Notice that the amount of people shown in the network is limited for performance reason. 
              The Teacher-Student relationships are not available for all, so some facet setting may not show the network at all. 
              More network visualizations concentrating on a particular person can be viewed at person instance pages.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Person',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Person instance page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view includes detailed data about this person.
            </li>
            <li>
              <strong>FAMILY RELATIONS</strong> show the family relation network of this person.
              NB some people may not have any family relations available.
            </li>
            <li>
              <strong>ACADEMIC RELATIONS</STRONG> show the Student-Teacher relation network of this person.
              NB some people may not have any academic relations available.
            </li>
            <li>
              <strong>CONNECTIONS</strong> shows this person's relations to other persons connected by specific vocations, places, organizations etc.
            </li>
            <li>
              <strong>RELATIONS</strong> shows this person's relations to connected vocations, places, organizations etc.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            The standardized name of the actor.
          `
        },
        image: {
          label: 'Image',
          description: `
            Possible image of the person, some people can have more than one images. Source: Wikimedia Commons.
          `
        },
        gender: {
          label: 'Gender',
          description: `
            The gender of the actor.
          `
        },
        fname: {
          label: 'Family name',
          description: `
            The family name of the actor.
          `
        },
        altLabel: {
          label: 'Alternative names',
          description: `
          Alternative names.
          `
        },
        entryText: {
          label: 'Entry text',
          description: `
            Full description of the person.
          `
        },
        relativeText: {
          label: 'List of relatives',
          description: `
            List of known relatives
          `
        },
        referenceText: {
          label: 'List of references',
          description: `
            List of used references.
            NB. This list is available only for the people in the 1640–1853 dataset.
          `
        },
        sourcereference: {
          label: 'Reference to the source',
          description: 'Reference to the source'
        },
        category: {
          label: 'Category',
          description: `
            Categor(y/ies) of the actor. This list is available only for the people in the 1640–1853 dataset.
          `
        },
        reference: {
          label: 'References',
          description: `
            The literature references for this actor. This list is available only for the people in the 1640–1853 dataset.
          `
        },
        organization: {
          label: 'Organization',
          description: `
            Organization(s) related to the actor. The organizations are extracted from the descriptions texts using language technology methods.
          `
        },
        title: {
          label: 'Vocation',
          description: `
            The vocations, e.g. professions, educational degrees, or titles of the person.
          `
        },
        relative: {
          label: 'Relatives in Student Registry',
          description: `
            List of relatives that also have a record in this dataset.
            NB: Some of these records are computationally generated from the texts, and there might be errors.
            NB2: in some cases relatives in a distance of several generations might be missing. 
          `
        },
        otherrelative: {
          label: 'Other Relatives',
          description: `
            List of relatives that are mentioned in the description texts. 
            NB: These records are computationally generated from the texts, and there might be errors.
            NB2: in some cases relatives in a distance of several generations might be missing. 
          `
        },
        related: {
          label: 'Academic Relations',
          description: `
            This list of related people contains students, teachers, supervisors, and namesakes of a person.
            NB: These records are not available for all the students.
          `
        }, /*
        relations: {
          label: 'Relations',
          description: `
            Todo, add description.
          `
        }, */
        similar: {
          label: 'Similar people',
          description: `
          These recommendations of similar people are generated from the person data with computational methods based on people's linkage to the vocations and organizations.
          The similarity is generated by the entities, e.g. places, vocations, mentioned in the following square-bracketed list.
        `
        },
        studentnation: {
          label: 'Student Nation',
          description: `
            The student nation of the person.
          `
        },
        database: {
          label: 'External Databases',
          description: `
            Person entries in external databases.
            NB: These links are computationally generated, so there might be errors due to e.g. missing or faulty information.
          `
        },
        birthPlace: {
          label: 'Place of Birth or Baptism',
          description: `
            Place where the person was born or baptized.
          `
        },
        birthDateTimespan: {
          label: 'Time of Birth or Baptism',
          description: `
            Time when the person was born or baptized.
          `
        },
        externalLink: {
          label: 'External Links',
          description: `
            Links to external databases.
            NB: these links are computationally generated, so there might be errors due to e.g. missing or faulty information. 
          `
        },
        enrollmentTimespan: {
          label: 'Time of Enrollment',
          description: `
            Time when the person enrolled.
          `
        },
        deathDateTimespan: {
          label: 'Time of Death or Burial',
          description: `
            Time when the person died or was buried.
          `
        },
        deathPlace: {
          label: 'Place of Death or Burial',
          description: `
            Place where the person died or was buried.
          `
        },
        place: {
          label: 'Place of Activity',
          description: `
            Place(s) of activity linked to this actor. This data has been automatically extracted from the textual descriptions.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source of information. The two available data sources are the Student Registers of  1640–1852 and 1853–1899.
          `
        }
      }
    },
    places: {
      label: 'Places',
      facetResultsType: 'places',
      shortDescription: 'Browse the data of related places',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Use this perspective to access the place data related to the students in the dataset.
      Places in the AcademySampo data consists of countries, counties, towns, villages, and town neighborhoods, 
      as well as individual buildings, e.g. schools, churches, hospitals etc.
      The data (labels, coordinates, hierarchy) is converted from various data sources: 
      Finnish Geographic Names (for Finnish and Karelian places), 
      Geonames (for Swedish places),
      YSO places, and 
      Wikidata (images).
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      See <a href="/instructions">instructions</a> for using the
      filters. The result view can be selected using the tabs:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TABLE</STRONG> view includes all places in
        the AcademySampo data. One table row is equivalent to one place.
      </li>
      <li>
        <strong>MAP</strong> is a map visualization showing the known locations of activities, e.g. places of studying, work or living.
      </li>
      <li>
        <strong>EXPORT</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Place',
        description: `
        <h6 class="MuiTypography-root MuiTypography-h6">
          Place instance page tabs
        </h6>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG>  view includes detailed data about this place.
          </li>
          <li>
            <strong>FAMILY RELATIONS</strong> show the family relation network of this person.
            NB some people may not have any family relations available.
          </li>
          <li>
            <strong>ACADEMIC RELATIONS</STRONG> show the Student-Teacher relation network of this person.
            NB some people may not have any academic relations available.
          </li>
          <li>
            <strong>CONNECTIONS</strong> shows this person's relations to other persons connected by specific vocations, places, organizations etc.
          </li>
          <li>
            <strong>RELATIONS</strong> shows this person's relations to connected vocations, places, organizations etc.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: 'The name of this place.'
        },
        altLabel: {
          label: 'Alternative Labels',
          description: 'The alternative names, e.g. in foreign languages of the place.'
        },
        broader: {
          label: 'Parent Place',
          description: `
          A larger region or geographic division in which a place is contained.
          `
        },
        location: {
          label: 'Coordinates',
          description: `
            Latitude and Longitude of the place.
          `
        },
        externalLink: {
          label: 'Datasources',
          description: `
            Link to an external database.
          `
        },
        narrower: {
          label: 'Places within',
          description: `
          A smaller region or geographic division contained within the place.
          `
        },
        num_activies: {
          label: 'Number of references',
          description: `
            Total number of references to this place in the database.
          `
        },
        peopleActive: {
          label: 'Place of Activity',
          description: `
            List of people who have life time activities connecting to this place.
          `
        },
        peopleBorn: {
          label: 'People born',
          description: `
            List of people born here.
          `
        },
        peopleBaptized: {
          label: 'People baptized',
          description: `
            List of people baptized here. Notice that this information is available only for a few people.
          `
        },
        peopleDied: {
          label: 'People deceased',
          description: `
            List of people deceased here.
          `
        },
        peopleBuried: {
          label: 'People buried',
          description: `
            List of people buried here. Notice that this information is available only for a few people.
          `
        },
        image: {
          label: 'Image',
          description: `
            Possible image of the place, some places can have more than one images. Source: Wikimedia Commons.
          `
        },
        title: {
          label: 'Related vocations',
          description: `
            Vocations that are connected to this place.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source database(s) (Schoenberg, Bibale, and Bodleian) that the Work
            occurs in. Click on the result table link to view the original record on the
            source’s website.
          `
        }
      }
    },
    organizations: {
      label: 'Organization',
      facetResultsType: 'organizations',
      shortDescription: 'Organization description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the AcademySampo data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Organization',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Events refer to various activities related to Manuscripts and Actors. Event
            types include Production, Transfer of Custody, and Activity events.
            Production events refer to the production of the physical manuscript.
            Transfer of Custody events indicate a change of ownership that involved
            a transaction of some kind, usually through an auction house or bookseller.
            The generic Activity event type covers all other types of events.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'label',
          description: ''
        },
        altLabel: {
          label: 'alternative labels',
          description: 'List of alternative labels or abbreviations.'
        },
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier.'
        },
        person: {
          label: 'People',
          description: `
            People associated with this vocation.
          `
        },
        related: {
          label: 'Related',
          description: `
            Other organizations that some common members. 
            The amount of common members is in parenthesis at the end of the label.
          `
        }
      }
    },
    categories: {
      label: 'Categories',
      facetResultsType: 'categories',
      shortDescription: 'Category description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the AcademySampo data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Category',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Events refer to various activities related to Manuscripts and Actors. Event
            types include Production, Transfer of Custody, and Activity events.
            Production events refer to the production of the physical manuscript.
            Transfer of Custody events indicate a change of ownership that involved
            a transaction of some kind, usually through an auction house or bookseller.
            The generic Activity event type covers all other types of events.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'label',
          description: ''
        },
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier.'
        },
        person: {
          label: 'People',
          description: `
            People associated with this category.
          `
        },
        broader: {
          label: 'Parent Category',
          description: `
          A larger category in which this record is contained.
          `
        },
        narrower: {
          label: 'Subcategories',
          description: `
          A subcategory.
          `
        },
        place: {
          label: 'Related place',
          description: `
            The specific place(s) associated with this record.
          `
        },
        related: {
          label: 'See also',
          description: `
            Reference page at ylioppilasmatrikkeli.helsinki.fi, in Finnish only.
          `
        }
      }
    },
    references: {
      label: 'References',
      facetResultsType: 'references',
      shortDescription: 'Reference description',
      longDescription: `
        Reference literature for the actors. 
        This data is available only for students in the 1640-1853 dataset.
      `,
      instancePage: {
        label: 'Reference',
        description: `
        <p>Reference literature for the actors. 
        This data is available only for students in the 1640-1853 dataset.
        </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'label',
          description: ''
        },
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier.'
        },
        person: {
          label: 'People',
          description: `
            People having this reference.
          `
        },
        broader: {
          label: 'Parent Category',
          description: `
          A larger category in which a place is contained.
          `
        },
        narrower: {
          label: 'Subcategories',
          description: `
          A subcategory.
          `
        },
        related: {
          label: 'See also',
          description: `
            Reference page at ylioppilasmatrikkeli.helsinki.fi, in Finnish only.
          `
        }
      }
    },
    relatives: {
      label: 'Relatives',
      facetResultsType: 'people',
      shortDescription: 'Browse the data of 28000 students and their relatives.',
      instancePage: {
        label: 'Referenced Person',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Instance page description
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: `
            Standardized name of the person.
          `
        },
        gender: {
          label: 'Gender',
          description: `
            Gender of the person.
          `
        },
        fname: {
          label: 'Family name',
          description: `
            Person's family name.
          `
        },
        altLabel: {
          label: 'Alternative names',
          description: `
          Alternative names including e.g. spelling variations, maiden or married names.
          `
        },
        image: {
          label: 'Image',
          description: `
            Possible image of the place. Some places can have more than one images. Source: Wikimedia Commons.
          `
        },
        referer: {
          label: 'Referenced with',
          description: `
            People in whose biographical descriptions this person is mentioned.
          `
        },
        entryText: {
          label: 'Entry text',
          description: `
            Full description of the person.
          `
        },
        relativeText: {
          label: 'Description of relatives',
          description: `
            List of known relatives. This information is only available with the 1640–1853 dataset.
          `
        },
        referenceText: {
          label: 'Description of references',
          description: `
            List of used references. This information is only available with the 1640–1853 dataset.
          `
        },
        title: {
          label: 'Vocation',
          description: `
            Vocation of the person.
          `
        },
        relative: {
          label: 'Relatives in Student Registry',
          description: `
            List of relatives that are also students of the University.
          `
        },
        otherrelative: {
          label: 'Other Relatives',
          description: `
            List of relatives that are mentioned in the description texts.
            NB: this list is computationally generated from the texts, so there might be errors. 
          `
        },
        birthPlace: {
          label: 'Place of Birth',
          description: `
            Place where the person was born.
          `
        },
        birthDateTimespan: {
          label: 'Time of Birth',
          description: `
            Time when the person was born.
          `
        },
        externalLink: {
          label: 'External Link',
          description: `
            Links to external databases.
          `
        },
        enrollmentTimespan: {
          label: 'Time of Enrollment',
          description: `
            Date of enrollment to the University.
          `
        },
        deathDateTimespan: {
          label: 'Time of Death',
          description: `
            Time when the person died.
          `
        },
        deathPlace: {
          label: 'Place of Death',
          description: `
            Place where the person died.
          `
        },
        place: {
          label: 'Place of Activity',
          description: `
            Place(s) of activity linked to this person.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source of information.
          `
        }
      }
    },
    times: {
      label: 'Timespan',
      facetResultsType: 'times',
      shortDescription: 'Timespan description',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the AcademySampo data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Timespan',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Events refer to various activities related to Manuscripts and Actors. Event
            types include Production, Transfer of Custody, and Activity events.
            Production events refer to the production of the physical manuscript.
            Transfer of Custody events indicate a change of ownership that involved
            a transaction of some kind, usually through an auction house or bookseller.
            The generic Activity event type covers all other types of events.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'label',
          description: ''
        },
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier.'
        },
        enrolled: {
          label: 'Enrollments',
          description: `
            People who enrolled the University during this timespan.
          `
        },
        born: {
          label: 'Births',
          description: `
            List of people born during this timespan.
          `
        },
        deceased: {
          label: 'Deceased',
          description: `
          List of people deceased during this timespan.
          `
        },
        broader: {
          label: 'Broader',
          description: `
          A wider timespan containing this.
          `
        },
        narrower: {
          label: 'Narrower',
          description: `
          List of shorter timespans withing this.
          `
        }
      }
    },
    titles: {
      label: 'Vocations',
      facetResultsType: 'vocations',
      shortDescription: 'Collection of vocations mentioned in the Student Register data.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to events associated with the
          histories of manuscripts and manuscript collections over the centuries.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all events in the AcademySampo data.
          </li>
          <li>
            <strong>MAP</STRONG> view visualizes the events that have location information on a map.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Vocation',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Events refer to various activities related to Manuscripts and Actors. Event
            types include Production, Transfer of Custody, and Activity events.
            Production events refer to the production of the physical manuscript.
            Transfer of Custody events indicate a change of ownership that involved
            a transaction of some kind, usually through an auction house or bookseller.
            The generic Activity event type covers all other types of events.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Label',
          description: ''
        },
        altLabel: {
          label: 'Alternative labels',
          description: 'List of alternative labels or abbreviations.'
        },
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier.'
        },
        broader: {
          label: 'Hierarchy',
          description: `
            Hierarchy of the vocations.
          `
        },
        totalcount: {
          label: 'Number of People',
          description: `
            Total number of students with this vocation.
          `
        },
        related: {
          label: 'Related vocations',
          description: `
            This list shows the 12 most common other vocations of people with the current vocation. 
            The number in parenthesis is the number of people. 
          `
        },
        person: {
          label: 'People',
          description: `
            People associated with this vocation.
            NB. this list includes both students and their relatives.
          `
        },
        ammo: {
          label: 'AMMO',
          description: `
            Corresponding occupation in AMMO/HISCO ontology.
          `
        },
        eventTimespan: {
          label: 'Date',
          description: `
            Date or time period associated with the event.
          `
        },
        place: {
          label: 'Related place',
          description: `
            The specific place(s) associated with the vocation.
          `
        }
      }
    },
    studentNations: {
      label: 'Student Nations',
      facetResultsType: 'student nations',
      shortDescription: 'Student Nations.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the student nations in the dataset.
          For the 1640–1852 dataset the student nations were extracted from the register descriptions.
          In the 1853–1899 dataset the student nations were provided as data fields in the source material.

          In addition to the student nations of Royal Academy of Turku and Helsinki University, 
          a few mentioned student nations of Swedish Universities were added to this domain ontology.

        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes student nations extracted from
            the AcademySampo data.
            One table row is equivalent to one student nation.
          </li>
          <li>
            <strong>EXPORT</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Student Nation',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Person instance page tabs
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TABLE</STRONG> view includes details about this student nation.
            </li>
            <li>
              <strong>BY YEAR</strong> is a timeline chart showing the yearly number of students 
              who have events relating to this student nation.
            </li>
            <li>
              <strong>EXPORT</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Label',
          description: ''
        },
        altLabel: {
          label: 'Alternative labels',
          description: 'List of alternative labels or abbreviations.'
        },
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier.'
        },
        related: {
          label: 'Related Student Nations',
          description: `
            List of Student Nations having some same people as members.
          `
        },
        numberOfPeople: {
          label: 'Number of members',
          description: `
            Total number of members in this student nation.
          `
        },
        person: {
          label: 'Members',
          description: `
            People mentioned as members of this student nation.
          `
        },
        role: {
          label: 'Roles',
          description: `
            People who are mentioned as inspectors, curators, or founding or honorary members of this student nation.
          `
        },
        comment: {
          label: 'Comment',
          description: `
            Optional comment about this student nation.
          `
        },
        externalLink: {
          label: 'External Link',
          description: `
            Link(s) to external databases.
          `
        }
      }
    }
  },
  aboutThePortal: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      About the Portal
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      AcademySampo Portal has been developed with funding from the Trans-Atlantic
      Platform under its Digging into Data Challenge (2017-2019). The partners in this project are
      the University of Oxford, the University of Pennsylvania, Aalto University,
      and the Institut de recherche et d’histoire des textes.
      Funding has been provided by the UK Economic and Social Research Council,
      the Institute of Museum and Library Services, the Academy of Finland, and the
      Agence nationale de la recherche.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      AcademySampo Portal is intended to enable large-scale exploration of data relating to the history and provenance
      of (primarily) Western European medieval and early modern manuscripts.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      AcademySampo Portal combines data from three specialist databases:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        <a href="https://sdbm.library.upenn.edu/"
          target='_blank' rel='noopener noreferrer'
        >
          Schoenberg Database of Manuscripts
        </a>
      </li>
      <li>
        <a href="http://bibale.irht.cnrs.fr/"
          target='_blank' rel='noopener noreferrer'
        >
          Bibale
        </a>
      </li>
      <li>
        <a href="https://medieval.bodleian.ox.ac.uk/"
          target='_blank' rel='noopener noreferrer'
        >
          Medieval Manuscripts in Oxford Libraries
        </a>
      </li>
    </ul>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The data have been combined using a unified Data Model based on the CIDOC-CRM
      and FRBRoo ontologies. A diagram of the Data Model can be seen
      <a href="https://drive.google.com/open?id=1uyTA8Prwtts5g13eor48tKHk_g63NaaG" target='_blank' rel='noopener noreferrer'>
      here</a>. The data have not been corrected or amended in any way. If you notice an error in the data,
      please report it to the custodians of the original database.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Features
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The AcademySampo Portal enables you to browse and search through most of the data assembled by the AcademySampo project
      from the two source databases. If you want to inspect the full raw data for any individual
      manuscript or other entity, please click on the “Open in Linked Data browser” button on
      the “Export” tab of the landing-page for that entity.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The AcademySampo Portal also provides map-based visualizations for a selection of the data relating to
      Manuscripts, Actors, and Places. The data resulting from a search or a filtered browse can be
      exported in the form of a CSV file. Click on the “Export” tab and then on the button
      “Open SPARQL query in yasgui.org”.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      If you want to search all the underlying data using the SPARQL query language, the endpoint is
      available here: <a href="http://ldf.fi/yoma/sparql" target='_blank' rel='noopener noreferrer'>
      http://ldf.fi/yoma/sparql</a>.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Data Reuse
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The AcademySampo data are made available for reuse under a
      <a href="https://creativecommons.org/licenses/by-nc/4.0/" target='_blank' rel='noopener noreferrer'>CC-BY-NC 4.0 licence</a>.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      You must give appropriate credit, provide a link to the license, and indicate if changes
      were made. You may do so in any reasonable manner, but not in any way that suggests the
      AcademySampo project or its partner institutions endorses you or your use.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      You may not use the data for commercial purposes.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      More Information
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The AcademySampo project has its own
      <a href="https://github.com/mapping-manuscript-migrations" target='_blank' rel='noopener noreferrer'>GitHub site</a>.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Here you will find documentation, scripts and programs, and samples of the raw data.
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Instructions
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The search functionality of the AcademySampo portal is based on the
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      faceted search</a> paradigm. By default each perspective displays
      all results from the corresponding class (Manuscripts, Works, Events, Actors, or Places).
      This default result set can be narrowed down by using the filters on the left.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using a single filter
    </h2>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Selecting values within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      All possible values for a filter are displayed either as a list or as a hierarchical
      tree structure (if available). The number of results is shown in brackets for each value.
      Once a value is selected, the results are automatically updated. To prevent further
      selections that do not return any results, also the possible values for all
      other filters are updated at the same time.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Multiple values can be selected within a single filter. Selecting multiple values
      generates results that contain any of the selected values. For example, selecting
      both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that
      include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Selected values of a filter appear in the Active filters section at the top of the list
      of filters. To deselect a filter, click the X mark next to it within the Active filters
      section. You can also deselect a filter value by unchecking the checkmark in the
      filter’s value list. The Active filters section only appears if there are filter
      values currently selected.
    </p>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Searching within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Search within a filter by using the search field at the top of each filter.
      All possible values of a filter remain visible at all times. The values of
      the filter that match the search term are indicated by a purple underline.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Steps for searching within filters:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Type search term into search field. If there are matches, a number
        will appear to the right of the search field, indicating the number
        of filter values that match the search term.
      </li>
      <li>
        Click the arrows to the right of the search field to cycle
        through the results. As you click the arrow, a different filter value
        will appear at the top of the list. Matched filters are underlined in
        purple.
      </li>
      <li>
        Click the checkmark next to a filter value to activate it. The results
        (and also other filters) are automatically updated.
      </li>
    </ol>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using multiple filters simultaneously
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The effectiveness of faceted search is realized when multiple filters are
      applied at the same time. As in many e-commerce sites, a logical AND is
      always used between the filters. For example selecting <i>Saint Augustine </i>
      and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and
      <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>)
    </p>
  `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Feedback
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      This semantic portal has been developed by the research project “Mapping Manuscript Migrations”.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      We are interested in your feedback on the functionality, coverage, and usefulness of the portal and its data.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Please complete our
      <a href="https://tinyurl.com/uph7xkj" target='_blank' rel='noopener noreferrer'>Feedback Survey Form.</a>
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    You can also contact us via email:
    <a href="mailto:mappingmanuscriptmigrations@gmail.com">mappingmanuscriptmigrations@gmail.com</a>
    or DM us on Twitter: @MSMigrations
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Please be aware that this portal’s response times may be affected by the size and complexity
      of the dataset, especially in areas like the map visualizations, the date filters, and the Events perspective.
    </p>
    `
}
