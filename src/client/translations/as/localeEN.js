export default {
  languageLabel: 'English',
  html: {
    title: 'AcademySampo – Finnish Academic People 1640–1899',
    description: `The AcademySampo portal offers tools for exploring biographical descriptions 
    about 28 000 Finnish and Swedish university students in 1640–1899.`
  },
  appTitle: {
    short: 'AcademySampo',
    mobile: 'AS',
    long: 'AcademySampo',
    subheading: `
      Finnish Academic People 1640&ndash;1899
    `
  },
  appDescription: '',
  selectPerspective: 'Select a perspective to search and browse the knowledge graph:',
  mainPageImageLicence: 'Images used under license from Wikimedia Commons',
  backendErrorText: 'One of the backend services is not available at the moment. Please try again later.',
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
    }
  },
  tabs: {
    table: 'table',
    map: 'map',
    migrations: 'migrations',
    network: 'network',
    //  pointcloud: 'point cloud',
    familyNetwork: 'family relations',
    academicNetwork: 'academic relations',
    relationNetwork: 'relations',
    connections: 'connections',
    events_by_year: 'timeline',
    by_year: 'timeline',
    export: 'sparql query'
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
        due to the errors or inadequate amount of source data.
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
    fullTextSearch: {
      properties: {
        prefLabel: {
          label: 'Label'
        },
        type: {
          label: 'Type'
        }
      }
    },
    people: {
      label: 'People',
      facetResultsType: 'people',
      shortDescription: 'Browse the data of 28000 university students.',
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
            NB. Using the buttons on the top right corner of the visualization allows you to e.g. zoom to a shorter interval or to save the visualization as an image in png or svg format. By hovering or clicking at the buttons for Birth, Enrollment, or Death it is possible to focus or hide some of the chartlines.
          </li>
          <li>
            <strong>MIGRATIONS</STRONG> view shows the connection
            between the places of birth and death.
          </li>
          <li>
            <strong>MAP</strong> is a map visualization showing the known locations of activities, e.g. places of studying, work, or living.
            Places without the coordinate information are shown as a part of the place higher in the hierarchy.
          </li>
          <li>
            <strong>NETWORK</strong> is a social network visualization showing the Teacher-Student relationships.
              Notice that the amount of people shown in the network is limited for performance reason.
              The Teacher-Student relationships are not available for all, so some facet setting may not show the network at all.
              More network visualizations focusing on a particular person can be viewed at person instance pages.
          </li>
          <li>
            <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Person',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
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
              <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
              table view into YASGUI query editor.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'Identifier',
          description: 'Identifier for this register entry in the ldf.fi-database'
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
            List of relatives mentioned in the source data.
          `
        },
        referenceText: {
          label: 'List of references',
          description: `
            List of used references.
            NB. This list is available only for the people in the 1640–1852 dataset.
          `
        },
        sourcereference: {
          label: 'Reference to the source',
          description: 'Reference to the source'
        },
        category: {
          label: 'Category',
          description: `
            Categories of the students.
            This list is available only for the people in the 1640–1852 dataset.
          `
        },
        reference: {
          label: 'References',
          description: `
            The literature references for this actor.
            This list is available only for the people in the 1640–1852 dataset.
          `
        },
        organization: {
          label: 'Organization',
          description: `
            Organization(s) related to the actor.
            The organizations are extracted from the descriptions texts using language technology methods.
          `
        },
        degree: {
          label: 'Degree',
          description: `
            Degrees this person has completed.
          `
        },
        title: {
          label: 'Vocation',
          description: `
            The vocations, e.g. professions, educational degrees, or titles of the person.
          `
        },
        relative: {
          label: 'Relatives in student registry',
          description: `
            List of relatives that also have a record in this dataset.
            NB: Some of these records are computationally generated from the texts, and there might be errors.
            NB2: in some cases relatives in a distance of several generations might be missing.
          `
        },
        otherrelative: {
          label: 'Other relatives',
          description: `
            List of relatives that are mentioned in the description texts.
            NB: These records are computationally generated from the texts, and there might be errors.
            NB2: in some cases relatives in a distance of several generations might be missing.
          `
        },
        related: {
          label: 'Academic relations',
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
          label: 'Student nation',
          description: `
            The student nation of the person.
          `
        },
        database: {
          label: 'External databases',
          description: `
            Person entries in external databases.
            NB: These links are computationally generated, so there might be errors due to e.g. missing or faulty information.
          `
        },
        birthPlace: {
          label: 'Place of birth or baptism',
          description: `
            Place where the person was born or baptized.
            NB. in most of the cases the source data contains information about the birth.
            However, there are a few cases when this information is not available,
            and details about the baptism are provided instead.
          `
        },
        birthDateTimespan: {
          label: 'Time of birth or baptism',
          description: `
            Time when the person was born or baptized.
            NB. in most of the cases the source data contains information about the birth.
            However, there are a few cases when this information is not available,
            and details about the baptism are provided instead.
          `
        },
        externalLink: {
          label: 'External links',
          description: `
            Links to external databases.
            NB: these links are computationally generated, so there might be errors due to e.g. missing or faulty information.
          `
        },
        enrollmentTimespan: {
          label: 'Time of enrollment',
          description: `
            Time when the person enrolled.
            NB: For the oldest part of the data (–1640) also enrollments to foreign universities (e.g. Uppsala, Tarto) are shown.
          `
        },
        deathDateTimespan: {
          label: 'Time of death or burial',
          description: `
            Time when the person died or was buried.
            NB. in most of the cases the source data contains information about the death.
            However, there are a few cases when this information is not available,
            and details about the burial are provided instead.
          `
        },
        deathPlace: {
          label: 'Place of death or burial',
          description: `
            Place where the person died or was buried.
            NB. in most of the cases the source data contains information about the death.
            However, there are a few cases when this information is not available,
            and details about the burial are provided instead.
          `
        },
        place: {
          label: 'Place of activity',
          description: `
            Place(s) of activity linked to this actor.
            This data has been automatically extracted from the textual descriptions.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source of information.
            The two available data sources are the Student Registers of 1640–1852 and 1853–1899.
          `
        }
      }
    },
    places: {
      label: 'Places',
      facetResultsType: 'places',
      shortDescription: 'Browse the data of related places.',
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
        <strong>MAP</strong> is a map visualization showing the known locations of activities, e.g. places of studying, work, or living.
        NB. places that do not have the coordinate information are shown within the place higher in the hierarchy.
      </li>
      <li>
        <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
        table view into YASGUI query editor.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Place',
        description: `
        <h6 class="MuiTypography-root MuiTypography-h6">
          Page tabs
        </h6>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes detailed data about this place.
          </li>
          <li>
            <strong>MAP</STRONG> visualizes this location and the places within it on a map.
          </li>
          <li>
            <strong>TIMELINE OF EVENTS</strong> is a timeline chart showing the yearly number of events relating to this place. These events consist of births, deaths, and lifetime events such as living or working at this place.
          </li>
          <li>
            <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'Identifier',
          description: 'Identifier for this register entry in the ldf.fi-database'
        },
        prefLabel: {
          label: 'Name',
          description: 'The name of this place.'
        },
        altLabel: {
          label: 'Alternative labels',
          description: 'The alternative names, e.g. in foreign languages of the place.'
        },
        broader: {
          label: 'Hierarchy of places',
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
        nearby: {
          label: 'Neighboring places',
          description: `
          Neighboring places within the same region.
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
          label: 'Place of activity',
          description: `
            List of people who have life time activities relating to this place.
            Besides the name a brief description about the activity is shown in parenthesis.
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
            <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Organization',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Organization refers to various groups by people,
            e.g. religious, governmental, military, or commercial organizations or companies.
            Notice that a person is linked only when the name of an organization is mentioned in his/her
            text description, and that there are cases when a membership e.g. in Finnish Parliament or Military
            can only be reasoned from the person's vocation.
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
          label: 'Identifier',
          description: 'Uniform Resource Identifier.'
        },
        person: {
          label: 'Related people',
          description: `
            People associated with this organization.
          `
        },
        title: {
          label: 'Related vocations',
          description: `
            List of vocations associated with this organization.
          `
        },
        related: {
          label: 'Related organizations',
          description: `
            Other organizations that some common members.
            The amount of common members is in parenthesis at the end of the label.
          `
        }
      }
    },
    degrees: {
      label: 'Degree',
      facetResultsType: 'degrees',
      shortDescription: 'Descriptions of the degree',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
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
        label: 'Degree',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Degree completed in the University
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Degree',
          description: ''
        },
        person: {
          label: 'Students with this degree',
          description: `
            List of students with this degree. The year of graduation is in parenthesis after the name, list is ordered by the year of graduation.
          `
        },
        title: {
          label: 'Related vocation',
          description: `
            Link to a possible, related vocation
          `
        },
        related: {
          label: 'Similar degrees',
          description: `
            Similar degrees completed the same students.
            The number of students is in parenthesis.
          `
        }
      }
    },
    categories: {
      label: 'Categories',
      facetResultsType: 'categories',
      shortDescription: 'Category description',
      longDescription: 'Category description',
      instancePage: {
        label: 'Category',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Categories are the classifications as on the
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/hakukriteeri_1.php"
              target='_blank' rel='noopener noreferrer'>
              Ylioppilasmatrikkeli 1640–1852</a>
              database search page.
            These categories include e.g. a student's place of birth, his schools before entering the university,
            or vocation during his career after graduation.

            Notice that the category data is available only for people in the 1640–1852 dataset.
            However, similar information is available in the data fields of vocations and activity locations of a person.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Label',
          description: ''
        },
        uri: {
          label: 'Identifier',
          description: 'Uniform Resource Identifier.'
        },
        person: {
          label: 'People',
          description: `
            People in this category.
          `
        },
        broader: {
          label: 'Parent category',
          description: `
          A larger category in which this record is contained.
          `
        },
        narrower: {
          label: 'Subcategories',
          description: `
          List of subcategories.
          `
        },
        place: {
          label: 'Related place',
          description: `
            The specific place(s) associated with this category.
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
      longDescription: '',
      instancePage: {
        label: 'Reference',
        description: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        References are the same literatury sources as on the
        <a href="https://ylioppilasmatrikkeli.helsinki.fi/hakukriteeri_1.php"
          target='_blank' rel='noopener noreferrer'>
          Ylioppilasmatrikkeli 1640–1852</a>
          database search page.
        This reference material is a collection of historical records such as registers of universities, high schools, parishes, and student nations etc.

        The reference data is available only for people in the 1640–1852 dataset.
      </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Label',
          description: ''
        },
        uri: {
          label: 'Identifier',
          description: 'Uniform Resource Identifier.'
        },
        person: {
          label: 'People',
          description: `
            People mentioned in this reference.
          `
        },
        broader: {
          label: 'Parent category',
          description: `
          A larger category of reference records.
          `
        },
        narrower: {
          label: 'Subcategories',
          description: `
          List of subcategories of this record type.
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
      // shortDescription: 'Browse the data of 28000 students and their relatives.',
      instancePage: {
        label: 'Relative',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            These pages represent available information about relatives, e.g. parents, spouses, that
            are mentioned in the biographical descriptions of students.
            Notice that only the relative mentioned in the texts are extracted to this database and
            the information may not contain all e.g. children or siblings of the students.
            Also the amount of available data may be limited with e.g. missing places and times of birth.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'Identifier',
          description: 'Identifier for this register entry in the ldf.fi-database'
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
            A possible image of this person. Some people can have more than one images. Source: Wikimedia Commons.
          `
        },
        referer: {
          label: 'Referenced with',
          description: `
            People in whose biographical descriptions this person is mentioned.
          `
        },
        title: {
          label: 'Vocation',
          description: `
            Vocation of the person.
          `
        },
        relative: {
          label: 'Relatives in student registry',
          description: `
            List of relatives that are also students of the University.
          `
        },
        otherrelative: {
          label: 'Other relatives',
          description: `
            List of relatives that are mentioned in the description texts.
            NB: this list is computationally generated from the texts, so there might be errors.
          `
        },
        birthPlace: {
          label: 'Place of birth',
          description: `
            Place where the person was born.
          `
        },
        birthDateTimespan: {
          label: 'Time of birth',
          description: `
            Time when the person was born.
          `
        },
        externalLink: {
          label: 'External link',
          description: `
            Links to external databases.
          `
        },
        deathDateTimespan: {
          label: 'Time of death',
          description: `
            Time when the person died.
          `
        },
        deathPlace: {
          label: 'Place of death',
          description: `
            Place where the person died.
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
            <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Timespan',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Timespans refer to various events related to People. Event
            types include Birth or Baptism, Enrollment, and Death or Burial.
            One use-case of this page is to get a list of all students enrolled at the same time.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Label',
          description: ''
        },
        uri: {
          label: 'Identifier',
          description: 'Uniform Resource Identifier.'
        },
        enrolled: {
          label: 'Enrollments',
          description: `
            People who enrolled the University during this timespan.
          `
        },
        born: {
          label: 'Births or baptisms',
          description: `
            List of people born or baptized during this timespan.
          `
        },
        deceased: {
          label: 'Deceased or buried',
          description: `
          List of people deceased or burial during this timespan.
          `
        },
        broader: {
          label: 'Broader',
          description: `
          A wider timespan containing this.
          NB. the events of narrower timespans are not shown on this page.
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
      shortDescription: 'Collection of vocations mentioned in the student register data.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Use this perspective to access the data related to the vocations of the students and their relatives in the dataset. Vocations in the AcademySampo data consists of academic degrees, professions, and various types of descriptions for a person.
        The data is converted automatically from text descriptions in the source material.
          See <a href="/instructions">instructions</a> for using the filters.
          The result view can be selected using the tabs:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes all vocations in the AcademySampo data.
            <br/>NB. In many cases the vocation is related to a place (e.g. <i>Bishop of Turku</i> or <i>Merchant living in Porvoo</i>) so the facet 'Related place' can be used to search for this kind of relations to a particular place.
          </li>
          <li>
            <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
            table view into YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Vocation',
        description: `
        <h6 class="MuiTypography-root MuiTypography-h6">
        Page tabs
        </h6>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> view includes detailed data about this place.
          </li>
          <li>
            <strong>TIMELINE</strong> is a timeline chart showing the yearly number of lifetime events relating to this vocation.
          </li>
          <li>
            <strong>SPARQL-QUERY</strong> tab presents the SPARQL query used to generate the result
            table view in the YASGUI query editor.
          </li>
        </ul>
        <br/>
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
          label: 'Identifier',
          description: 'Uniform Resource Identifier.'
        },
        broader: {
          label: 'Hierarchy',
          description: `
            Hierarchy of the vocations.
          `
        },
        totalcount: {
          label: 'Number of people',
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
            Besides the names, a possible description about the activity is shown in parenthesis.
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
      shortDescription: 'Student Nations mentioned in the data.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Use this perspective to access data related to the student nations in the dataset.
          For the 1640–1852 dataset the student nations were extracted from the register descriptions.
          In the 1853–1899 dataset the student nations were provided as data fields in the source material.

          <br/><br/>
          In addition to the student nations of Royal Academy of Turku and Helsinki University,
          a few mentioned student nations of Swedish Universities were added to this dataset.

          <br/><br/>
          More information about the history of Student Nations in Helsinki University is available
          <a href="https://osakunta.fi/historia/" target='_blank' rel='noopener noreferrer'>
          here</a> in Finnish.
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG> tab lists the student nations extracted from
            the AcademySampo data.
            One table row is equivalent to one student nation.
          </li>
          <li>
            <strong>SPARQL-QUERY</strong> tab presents the SPARQL query used to generate the result
            table view in the YASGUI query editor.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Student Nation',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Page tabs
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
              <strong>SPARQL-QUERY</strong> the SPARQL query used to generate the result
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
          label: 'Identifier',
          description: 'Uniform Resource Identifier.'
        },
        related: {
          label: 'Related student nations',
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
          label: 'External link',
          description: `
            Link(s) to external databases.
          `
        }
      }
    }
  },
  aboutThePortalPartOne: `
  <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
  About the Portal
  </h1>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    AcademySampo system consists of two components. 1) The AcademySampo portal with its different application perspectives
    is targeted for human end-users for searching and exploring Finnish Academic People during 1640–1899.
    2) The portal is based on the Linked Open Data service that publishes linked open data extracted from the student registries Ylioppilasmatrikkelit 1640–1852 and 1853–1899 of the Royal Academy of Turku and University of Helsinki, enriched with data linking and reasoning.
    The data service can be used freely for application development and is available at the Finnish Linked Data service LDF.fi.
  </p>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    AcademySampo is a living laboratory prototype on the Web. It has been developed by the Semantic Computing Research Group (SeCo) of Aalto University and University of Helsinki.
  </p>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
  The student data is based on two main sources:
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
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Instructions
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The search functionality of the AcademySampo portal is based on the
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      faceted search</a> paradigm. By default each perspective displays
      all results from the corresponding class (People, Places, Vocations, or Student Nations).
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
      both <i>Turku</i> and <i>Viipuri</i> as places of birth returns results that
      include either <i>Turku</i> <strong>OR</strong> <i>Viipuri</i> as the place of birth.
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
      always used between the filters. For example selecting <i>Turku</i>
      and <i>Viipuri</i> as places of birth and <i>Helsinki</i> and
      <i> Tukholma</i> as places of death, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Place of birth: <i>Turku</i> <strong>OR</strong> Place of birth: <i>Viipuri</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Place of death: <i>Helsinki</i> <strong>OR</strong> Place of death: <i>Tukholma</i>)
    </p>
  `
}
