export default {
  languageLabel: 'Suomi',
  html: {
    title: 'Akatemiasampo – Suomalaiset akateemiset henkilöt 1640–1899',
    description: `Akatemiasampo.fi-portaali tarjoaa älykkäät haku- ja 
    selailutoiminnat, joihin on saumattomasti integroitu joukko data-analyyttisiä työkaluja 
    ja visualisointeja henkilöiden ja henkilöryhmien tutkimista ja analysointia varten verkostoina, 
    tilastoina, erilaisina graafeina ja kartoilla.`
  },
  appTitle: {
    short: 'Akatemiasampo',
    mobile: 'AS',
    long: 'Akatemiasampo',
    subheading: `
      Suomalaiset akateemiset henkilöt 1640&ndash;1899
    `
  },
  appDescription: '',
  selectPerspective: 'Valitse näkymä tiedon hakuun:',
  mainPageImageLicence: 'Images used under license from Wikimedia Commons',
  backendErrorText: 'Yksi Akatemiasampo.fi-portaalin taustapalveluista ei ole tällä hetkellä saatavilla. Ole hyvä yritä myöhemmin uudestaan.',
  topBar: {
    feedback: 'palaute',
    info: {
      info: 'Info',
      blog: 'Projektin kotisivu',
      blogUrl: 'https://seco.cs.aalto.fi/projects/yo-matrikkelit/',
      aboutThePortal: 'Tietoa portaalista'
    },
    searchBarPlaceHolder: 'Etsi kaikista näkymistä',
    searchBarPlaceHolderShort: 'Etsi',
    instructions: 'ohjeet'
  },
  facetBar: {
    results: 'Tulokset',
    activeFilters: 'Aktiiviset suodattimet:',
    removeAllFilters: 'Poista kaikki',
    narrowDownBy: 'Rajoita',
    filterOptions: 'Suodattimen asetukset',
    filterByName: 'Rajaa nimen perusteella',
    filterByBoundingBox: 'Rajaa laatikkovalinnalla',
    selectionOptions: 'Valintajoukon asetukset',
    selectAlsoSubconcepts: 'Valitse automaattisesti kaikki alakäsitteet',
    doNotSelectSubconcepts: 'Älä valitse alakäsitteitä',
    sortingOptions: 'Järjestämisen valinnat',
    sortAlphabetically: 'Järjestä aakkosten mukaan',
    sortByNumberOfSearchResults: 'Järjestä tulosten määrän mukaan',
    useDisjunction: 'Käytä loogista TAI valintaa',
    useConjuction: 'Käytä looginen JA valintaa',
    minYear: 'Min vuosi',
    maxYear: 'Max vuosi',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Etsi...',
    applyFacetSelection: 'Hae',
    pieChart: {
      tooltip: 'Piirakkakaavio'
    }
  },
  tabs: {
    table: 'taulukko',
    map: 'kartta',
    migrations: 'muuttoliike',
    network: 'verkosto',
    //  pointcloud: 'point cloud',
    familyNetwork: 'Perhesuhteet',
    academicNetwork: 'Akateemiset suhteet',
    relationNetwork: 'Suhteet',
    connections: 'Yhteydet',
    by_year: 'Aikajana',
    placeByYear: 'Aikajana tapahtumille',
    placeMap: 'Kartta',
    titleByYear: 'Aikajana',
    export: 'SPARQL-kysely',
    nationByYear: 'Aikajana'
  },
  table: {
    rowsPerPage: 'Riviä sivulla',
    of: ''
  },
  lineChart: {
    Birth: 'Syntymä',
    Enrollment: 'Kirjautuminen',
    Death: 'Kuolema',
    Event: 'Tapahtuma'
  },
  exportToYasgui: 'avaa tulosten kysely yasgui sparql editorissa',
  openInLinkedDataBrowser: 'avaa linkitetyn datan selaimessa',
  instancePageGeneral: {
    introduction: `
    `,
    // introduction: `
    //   <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    //   Tämä sivu tarjoaa ihmisluettavan tiivistelmän tähän {entity} resurssiin liittyvistä
    //   asioista. Klikkaa "avaa linkitetyn datan selaimessa" nappia tarkastellaksesi
    //   kaikkia tähän resurssiin liittyviä luokkia ja ominaisuuksia.
    //   </p>
    //   <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    //   Viitataksesi tähän resurssiin käytä tätä url-osoitetta. Voit käyttää osoitetta
    //   myös palataksesi tähän resurssiin milloin vain.
    //   </p>
    // `,
    repetition: `
      <h6 class="MuiTypography-root MuiTypography-h6">
        Automaattisesti luotu tieto
      </h6>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Suuri osa datasta on automaattisesti luotua,
        erityisesti perhesuhteisiin ja ammatteihin liittyen.
        Tällainen data saattaa olla virheellistä, tai siinä voi olla puutteita.
      </p>
    `
  },
  deckGlMap: {
    arcColouring: 'Kaaren väritys:',
    showMoreInformation: 'Klikkaa nähdäkseni lisää.',
    peopleMigrations: {
      legendTitle: 'Kaaren väritys',
      legendFrom: 'Syntymäpaikka',
      legendTo: 'Kuolinpaikka',
      from: 'Syntymäpaikka:',
      to: 'Kuolinpaikka:',
      count: 'Henkilöiden lukumäärä:',
      listHeadingSingleInstance: 'Henkilöt:',
      listHeadingMultipleInstances: 'Henkilöt:'
    }
  },
  perspectives: {
    fullTextSearch: {
      properties: {
        prefLabel: {
          label: 'Nimi'
        },
        type: {
          label: 'Tyyppi'
        }
      }
    },
    people: {
      label: 'Henkilöt',
      facetResultsType: 'henkilöä',
      shortDescription: 'Selaa tietoja noin 28000 opiskelijasta ja heidän sukulaisistaan',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tämän näkymän kautta voit tutkia opiskelijoihin liittyvää dataa.
          Data on luotu kahden pääasiallisen lähteen perusteella:
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/" target="_blank" rel="noopener noreferrer">Ylioppilasmatrikkeli 1640–1852</a>:
             joka sisältää noin 18000 opiskelijan tiedot, ja jonka on koonnut Yrjö Kotivuori.
            </li>
            <li>
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/1853-1899/" target="_blank" rel="noopener noreferrer">Ylioppilasmatrikkeli 1853–1899</a>:
            joka sisältää noin 9500 opiskelijan tiedot, ja jonka on koonnut Veli-Matti Autio.
            </li>
          </ul>
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Enemmän taustatietoa Akatemiasammosta voi lukea projektin <a href="https://seco.cs.aalto.fi/projects/yo-matrikkelit/"  target="_blank" rel="noopener noreferrer">kotisivulta</a>.
          Sivulla <a href="/instructions">ohjeet</a> on tietoa hakuominaisuuksien käytöstä.
          Hakutuloksia voi tarkastella seuraavien välilähtien kautta:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG>-väilehti näyttää opiskelijoiden tietoja riveittäin,
            ja yksi rivi vastaa yhden henkilön tietoja.
            Kuvien lähde on Wikidata/Wikimedia Commons.
          </li>
          <li>
            <strong>AIKAJANA</strong>-välilehti on aikajanakaavio, joka näyttää vuosittain kuinka monta opiskelijaa
            on kirjautunut, kuollut tai syntynyt.
          </li>
          <li>
            <strong>MUUTTOLIIKE</STRONG>-välilehti visualisoi yhteyttä syntymä- ja kuolinpaikkojen välillä.
          </li>
          <li>
            <strong>KARTTA</strong>-välilehti visualisoi kartalla henkilöihin liittyvien aktiviteettien paikkoja, kuten opiskelupaikkoja tai työhön liittyviä paikkoja. Paikat, joiden koordinaatit eivät ole tiedossa, näytetään hierarkiassa ylemmän paikan yhteydessä.
          </li>
          <li>
            <strong>VERKOSTO</strong>-välilehti visualisoi sosiaalista verkostoa opiskelija-oppias suhteiden osalta.
              Huomaa, että visualisoinnissa näkiviä henkilöitä on rajoitettu suorituskyvyn vuoksi. Opettaja-oppilas verkostot
              eivät ole saatavilla kaikille henkilöille, joten joillain rajauksilla ei verkostoa löydy lainkaan.
              Lisää verkostovisualisointoja yksittäiseen henkilöön keskittyen löytyy henkilön kotisivulta.
          </li>
          <li>
            <strong>SPARQL-KYSELY</strong>-välilehti avaa tulosten hakuun käytetyn SPARQL-kyselyn YASGUI-editorissa.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Henkilö',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Välilehdet:
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TAULUKKO</STRONG>-välilehti näyttää yksityiskohtaista tietoa henkilöstä.
            </li>
            <li>
              <strong>PERHESUHTEET</strong>-välilehti visualisoi henkilön perhesuhteiden verkostosta.
              Huomaa, että joillain henkilöillä ei ole datassa merkittyjä sukulaisia.
            </li>
            <li>
              <strong>AKATEEMISET SUHTEET</STRONG>-välilehti visualisoi henkilön opettaja-oppilas suhteita.
              Huomaa, että joillain henkilöillä ei ole datassa merkittyjä akateemisia suhteita.
            </li>
            <li>
              <strong>YHTEYDET</strong>-välilehti näyttää henkilön yhteydet toisiin henkilöihin esimerkiksi ammattien ja paikkojen kautta.
            </li>
            <li>
              <strong>SUHTEET</strong>-välilehti visualisoi henkilön yhteyksiä esimerkiksi ammatteihin ja paikkoihin.
            </li>
            <li>
              <strong>SPARQL-KYSELY</strong>-välilehti avaa tulosten hakuun käytetyn SPARQL-kyselyn YASGUI-editorissa.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        prefLabel: {
          label: 'Nimi',
          description: `
            Henkilön standardimuotoinen nimi.
          `
        },
        image: {
          label: 'kuva',
          description: `
            Mahdollinen kuva henkilöstä. Lähde: Wikimedia Commons.
          `
        },
        gender: {
          label: 'Sukupuoli',
          description: `
            Henkilön sukupuoli.
          `
        },
        fname: {
          label: 'Sukunimi',
          description: `
            Henkilön sukunimi.
          `
        },
        altLabel: {
          label: 'Vaihtoehtoisia nimiä',
          description: `
          Vaihtoehtoisia nimiä.
          `
        },
        entryText: {
          label: 'Matrikkeliteksti',
          description: `
            Henkilön koko kuvaus matrikkelissa.
          `
        },
        relativeText: {
          label: 'Luettelo sukulaisista',
          description: `
            Luettelo sukulaisista, jotka mainitaan alkuperäisessä datassa.
          `
        },
        referenceText: {
          label: 'Viitteet',
          description: `
            Luettelo käytetyistä lähteistä.
            Huomaa, että tämä tieto on olemassa vain 1640–1852-matrikkelin henkilöille.
          `
        },
        sourcereference: {
          label: 'Viite matrikkeliin',
          description: 'Viite matrikkeliin.'
        },
        category: {
          label: 'Henkilöryhmä',
          description: `
            Erilaisia ryhmiä, joihin henkilön on katsottu kuuluneen.
            Huomaa, että tämä tieto on olemassa vain 1640–1852-matrikkelin henkilöille.
          `
        },
        reference: {
          label: 'Kirjallisuusviitteet',
          description: `
            Kirjoja joissa tietoa tästä henkilöstä
            Huomaa, että tämä tieto on olemassa vain 1640–1852-matrikkelin henkilöille.
          `
        },
        organization: {
          label: 'Organisaatio',
          description: `
            Henkilöön liittyviä organisaatioita (järjestöjä etc)
            TOrganisaatiot on louhittu tekstistä kieliteknologisin menetelmin.
          `
        },
        title: {
          label: 'Ammatti tai arvo',
          description: `
            Henkilön ammatit tai erilaiset arvot.
          `
        },
        relative: {
          label: 'Sukulaiset ylioppilasmatrikkelissa',
          description: `
            Lista sukulaisista, jotka ovat myös ylioppilasmatrikkelissa.
            (Osa näistä on automaattisesti luotuja, ja saattavat sisältää virheitä.
              Eräissä tapauksissa usean sukupolven takaisia sukulaisia voi myös puuttua.)
          `
        },
        otherrelative: {
          label: 'Muut sukulaiset',
          description: `
            Lista sukulaisista, jotka mainitaan teksteissä, mutta joista ei ole omaa merkintää.
            (Osa näistä on automaattisesti luotuja, ja saattavat sisältää virheitä.
              Eräissä tapauksissa usean sukupolven takaisia sukulaisia voi myös puuttua.)
          `
        },
        related: {
          label: 'Akateemiset suhteet',
          description: `
            Tämä lista sisältää henkilön opiskelijat, opettajat ja valvojat.
            (Näitä tietoja ei ole saatavilla kaikille henkilöille.)
          `
        }, /*
        relations: {
          label: 'Relations',
          description: `
            Todo, add description.
          `
        }, */
        similar: {
          label: 'Samanlaisia henkilöitä',
          description: `
          Nämä suositukset "samankaltaisista henkilöistä" on luotu automaattisesti esimerkiksi henkilöiden ammattien ja organisaatioiden perusteella.
          Samankaltaisuus on laskettu resursseista (paikoista, ammateista...) jotka ovat seuraavassa listassa.
        `
        },
        studentnation: {
          label: 'Osakunta',
          description: `
            Henkilön osakunta.
          `
        },
        database: {
          label: 'Ulkoinen tietokanta',
          description: `
            Henkilön tiedot ulkoisessa tietokannassa.
            (Nämä on luotu automaattisesti, ja saattavat sisältää virheitä.)
          `
        },
        birthPlace: {
          label: 'Syntymä- tai kastepaikka',
          description: `
            Paikka jossa henkilö syntyi tai kastettiin.
            (Useimmiten sisätää tiedon syntymäpaikasta, mutta joissain tapauksissa tätä tietoa ei ole saatavilla
            ja kastepaikka on annettu sen sijaan.)
          `
        },
        birthDateTimespan: {
          label: 'Syntymän tai kasteen aika',
          description: `
            Aika jolloin henkilö syntyi tai kastettiin.
            (Useimmiten sisätää tiedon syntymästä, mutta joissain tapauksissa tätä tietoa ei ole saatavilla
            ja kasteen tiedot on annettu sen sijaan.)
          `
        },
        externalLink: {
          label: 'Ulkoiset linkit',
          description: `
            Linkkejä ulkoisiin tietokantoihin..
            (Nämä on luotu automaattisesti, ja saattavat sisältää virheitä.)
          `
        },
        enrollmentTimespan: {
          label: 'Kirjautumisen aika',
          description: `
            Aika jolloin henkilö kirjautui yliopistoon.
            Huomaa, että kirjautuminen saattaa tarkoittaa kirjautumista myös muuhun yliopistoon.
            Sen vuoksi datassa on esimerkiksi ennen vuotta 1640 olevia kirjautumisaikoja.
          `
        },
        deathDateTimespan: {
          label: 'Kuoleman tai hautauksen ajankohta',
          description: `
            Ajankohta jolloin henkilö kuoli tai haudattiin.
            (Useimmiten sisätää tiedon kuolemasta, mutta joissain tapauksissa tätä tietoa ei ole saatavilla
            ja hautauksen tiedot on annettu sen sijaan.)
          `
        },
        deathPlace: {
          label: 'Kuoleman tai hautauksen paikka',
          description: `
            Paikka jossa henkilö kuoli tai jonne hänet haudattiin.
            (Useimmiten sisätää tiedon kuolemasta, mutta joissain tapauksissa tätä tietoa ei ole saatavilla
            ja hautauksen tiedot on annettu sen sijaan.)
          `
        },
        place: {
          label: 'Toiminnan paikka',
          description: `
            Henkilön toimintaan liittyviä paikkoja.
            (Tämä tieto on louhittu automaattisesti tekstikuvauksista.)
          `
        },
        source: {
          label: 'Matrikkeli',
          description: `
            Ylioppilas matrikkeli, joka on tämän tiedon lähde.
            Lähteinä ovat ylioppilasmatrikkelit vuosilta 1640–1852 ja 1853–1899.
          `
        }
      }
    },
    places: {
      label: 'Paikat',
      facetResultsType: 'paikkaa',
      shortDescription: 'Selaa paikkoihin liittyviä tietoja',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Käytä tätä näkymää saadaksesi tietoa paikoista, joihin matrikkeleissa mainitut henkilöt liittyvät.
      Akatemiasammon paikat koostuvat maista, lääneistä, kaupungeista, kylistä ja kaupunginosista, sekä myös yksittäisistä rakennuksista.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Sivulla <a href="/instructions">ohjeet</a> on tietoa hakuominaisuuksien käytöstä.
    Tuoksia voi tarkastella seuraavien välilähtien kautta:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TAULUKKO</STRONG>-välilehti sisältää tietoa Akatemiasammon paikoista riveittäin. Yksi rivi vastaa yhden paikan tietoja.
      </li>
      <li>
        <strong>KARTTA</strong>-välilehti näyttää kartalla paikkoja, joissa on ollut jotain toimintaa. Huom. paikat, joiden koordinaatit eivät ole tiedossa, näytetään hierarkiassa ylemmän paikan yhteydessä.
      </li>
      <li>
        <strong>SPARQL-KYSELY</strong>-välilehti avaa tulosten hakuun käytetyn SPARQL-kyselyn YASGUI-editorissa.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Paikka',
        description: `
        <h6 class="MuiTypography-root MuiTypography-h6">
          Käytössä olevat välilehdet:
        </h6>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG>-välilehti näyttää riveittäin tietoa tästä paikasta.
          </li>
          <li>
            <strong>KARTTA</STRONG> näyttää tämän paikan ja siihen kuuluvat paikat kartallla.
          </li>
          <li>
            <strong>TAPAHTUMIEN AIKAJANA</strong> on aikajanakaavio joka näyttää paikkaan liittyvien vuosittaisten
            tapahtumien, syntymien sekä kuolemien määrän,
          </li>
          <li>
            <strong>SPARQL-KYSELY</strong>-välilehti avaa tulosten hakuun käytetyn SPARQL-kyselyn YASGUI-editorissa.
          </li>
        </ul>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        prefLabel: {
          label: 'Nimi',
          description: 'Paikannimi.'
        },
        altLabel: {
          label: 'Vaihtoehtoinen nimi',
          description: 'Vaihtoehtoinen, esimerkiksi vieraskielinen, nimi paikalle'
        },
        broader: {
          label: 'Hierarkia',
          description: `
          Hierarkiassa laajempi alue, jonka osa paikka on.
          `
        },
        location: {
          label: 'Koordinaatit',
          description: `
            Paikan leveys- ja pituusasteet.
          `
        },
        externalLink: {
          label: 'Datan lähteet',
          description: `
          Linkki ulkoiseen tietokantaan.
          `
        },
        nearby: {
          label: 'Lähialueen paikat',
          description: `
          Muita paikkoja samalla lähialueella.
          `
        },
        narrower: {
          label: 'Sisältää paikat',
          description: `
          Pienempi geografinen alue, joka on osa tätä.
          `
        },
        num_activies: {
          label: 'Viittausten määrä datassa',
          description: `
            Tähän paikaan kohdistuvien viitteiden määrä Akatemiasammon datassa.
          `
        },
        peopleActive: {
          label: 'Toiminnan paikka',
          description: `
          Lista henkilöistä joiden toiminta liittyi tähän paikkaan.
          Nimen lisäksi toiminnan luonne on annettu suluissa.
          `
        },
        peopleBorn: {
          label: 'Täällä syntyneet',
          description: `
            Lista ihmisistä, jotka ovat syntyneet tässä paikassa.
          `
        },
        peopleBaptized: {
          label: 'Täällä kastetut',
          description: `
            Lista täällä kastetuista henkilöistä. Huomaa, että tämä tieto on saatavilla vain osalle henkilöistä.
          `
        },
        peopleDied: {
          label: 'Täällä kuolleet',
          description: `
            Lista täällä kuolleista henkilöistä.
          `
        },
        peopleBuried: {
          label: 'Tänne haudatut',
          description: `
            Lista tännekastetuista henkilöistä. Huomaa, että tämä tieto on saatavilla vain osalle henkilöistä.
          `
        },
        image: {
          label: 'Kuva',
          description: `
            Mahdollinen kuva tästä paikasta. Joillain paikoilla on useampi kuin yksi kuva. lähde: Wikimedia Commons.
          `
        },
        title: {
          label: 'Liittyvät ammatit ja arvot',
          description: `
          Tähän paikkaan liittyviä ammatteja ja titteleitä.
          `
        },
        source: {
          label: 'Lähde',
          description: `
          `
        }
      }
    },
    organizations: {
      label: 'Organisaatio',
      facetResultsType: 'organisaatiota',
      shortDescription: 'Organisaation kuvaus',
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
        label: 'Organisaatio',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Organisaatiota ovat erilaiset ihmisten ryhmät, kuten uskonnolliset, sotilaalliset organisaatiot, sekä kaupalliset yhtiöt.
            Huomaa, että henkilö on yhdistetty organisaatiooon vain jos organisaatio on mainittu hänen matrikkelitekstissään.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'nimi',
          description: ''
        },
        altLabel: {
          label: 'Vaihtoehtoisia nimiä',
          description: 'Lista vaihtoisista nimistä tai lyhenteistä.'
        },
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        person: {
          label: 'Liittyvät ihmiset',
          description: `
            Tähän organisaatioon liittyviä ihmisiä
          `
        },
        title: {
          label: 'Liittyviä ammmatteja tai titteleitä',
          description: `
            Lista tähän organisaatioon liittyvistä ammateista tai titteleistä
          `
        },
        related: {
          label: 'Liittyvät organisaatiot',
          description: `
            Muita organisaatiota, joilla on yhteisiä jäseniä.
            Yhteisten jäsenten määrä suluissa.
          `
        }
      }
    },
    categories: {
      label: 'Henkilöryhmät',
      facetResultsType: 'henkilöryhmää',
      shortDescription: 'Henkilöryhmät',
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
        label: 'Henkilöryhmä',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Henkilöryhmät (kategoriat) ovat ylioppilasmatrikkelin luokittelukiteerejä. Kts. esimerkiksi:
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/hakukriteeri_1.php"
              target='_blank' rel='noopener noreferrer'>
              Ylioppilasmatrikkeli 1640–1852</a>

            Kategoriat voivat olla esimerkiksi henkilön syntymäpaikkoja tai kouluja.

            Tämä tieto on suoraan saatavilla vain 1640–1852-matrikkelin henkilöille, mutta vastaava
            tieto on saatavilla henkilön titteleiden ja toiminnan kautta.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Nimi',
          description: ''
        },
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        person: {
          label: 'Henkilöt',
          description: `
            Tähän henkilöryhmään kuuluvat henkilöt.
          `
        },
        broader: {
          label: 'Laajempi henkilöryhmä',
          description: `
          Laajempi henkilöryhmä (kategoria).
          `
        },
        narrower: {
          label: 'Alaryhmät',
          description: `
          Lista alaryhmistä (alakategorioista).
          `
        },
        place: {
          label: 'Liittyvä paikka',
          description: `
            Tähän ryhmään liittyvät paikat.
          `
        },
        related: {
          label: 'Katso myös',
          description: `
            Tietoa ylioppilasmatrikkeli.helsinki.fi sivustolla.
          `
        }
      }
    },
    references: {
      label: 'Viitteet',
      facetResultsType: 'viitteet',
      shortDescription: 'Viitteet',
      longDescription: '',
      instancePage: {
        label: 'Viite',
        description: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Viitteellä tarkoitetaan tässä samoja kirjallisia lähteitä kuin sivulla
        <a href="https://ylioppilasmatrikkeli.helsinki.fi/hakukriteeri_1.php"
          target='_blank' rel='noopener noreferrer'>
          Ylioppilasmatrikkeli 1640–1852</a>

          Tämä viitemateriaali on kokoelma erilaisia asiakirjoja, esimerkiksi yliopistoilta, seurakunnilta, jne.
          Tämä viitemateriaali on saatavilla vain vuosien 1640–1852-matrikkelin henkilöille.
      </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Nimi',
          description: ''
        },
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        person: {
          label: 'Henkilöt',
          description: `
            Tässä viitemateriaalissa mainitut henkilöt.
          `
        },
        broader: {
          label: 'Ylempi kategoria',
          description: `
          Viitemateriaalin ylempi kategoria.
          `
        },
        narrower: {
          label: 'Alakategoria',
          description: `
          Alakategorioiden lista.
          `
        },
        related: {
          label: 'Katso myös',
          description: `
            VIitesivu ylioppilasmatrikkeli.helsinki.fi sivustolla
          `
        }
      }
    },
    relatives: {
      label: 'Sukulaiset',
      facetResultsType: 'henkilöä',
      // shortDescription: 'Browse the data of 28000 students and their relatives.',
      instancePage: {
        label: 'Sukulainen',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            SUkulaisia ovat tässä sukulaiset, jotka on mainittu henkilön kuvauksessa, mutta joilla ei ole omaa matrikkelimerkintää.
            Datassa on tietoa vain matrikkelitekstissä mainituista sukulaisista, ja tässä voi olla puutteita.
          </p>
        `
      },
      properties: {
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        prefLabel: {
          label: 'Nimi',
          description: `
            Henkilön nimi standarsoidussa muodossa.
          `
        },
        gender: {
          label: 'Sukupuoli',
          description: `
            Henkilön sukupuoli.
          `
        },
        fname: {
          label: 'Sukunimi',
          description: `
            Henkilön sukunimi
          `
        },
        altLabel: {
          label: 'Vaihtoehtoiset nimet',
          description: `
          VAihtoehtoisia nimiä, kuten erilaisia kirjoitusasuja sekä tyttönimiä.
          `
        },
        image: {
          label: 'Kuva',
          description: `
            MAhdollinen kuva henkilöstä. Lähde: Wikimedia Commons.
          `
        },
        referer: {
          label: 'Viitattu',
          description: `
            Henkilö jonka kuvauksessa tämä henkilö on mainittu.
          `
        },
        title: {
          label: 'Ammatti tai arvo',
          description: `
            Henkilön ammatti tai arvo.
          `
        },
        relative: {
          label: 'Sukulaiset ylioppilasmatrikkelissa',
          description: `
            Lista sukulaisista, joilla on myös merkintä ylioppilasmatrikkelissa.
          `
        },
        otherrelative: {
          label: 'Muut sukulaiset',
          description: `
            ista sukulaisista, jotka on mainittu kuvausteksteissä.
            Huomaa, että tämä lista on automaattisesti generoitu ja voi sisältää virheitä.
          `
        },
        birthPlace: {
          label: 'Syntymäpaikka',
          description: `
            Henkilön syntymäpaikka.
          `
        },
        birthDateTimespan: {
          label: 'syntymäpaikasta',
          description: `
            Henkilön syntymäaika.
          `
        },
        externalLink: {
          label: 'Ulkoinen linkki',
          description: `
            Linkki henkilön tietoihin ulkoisessa tietokannassa.
          `
        },
        deathDateTimespan: {
          label: 'Kuoleman ajankohta',
          description: `
            Ajankohta jolloin henkilö on kuollut.
          `
        },
        deathPlace: {
          label: 'Kuolinpaikka',
          description: `
            Paikka jossa henkilö kuoli.
          `
        },
        source: {
          label: 'Matrikkeli',
          description: `
            Ylioppilasmatrikkeli, joka on tiedon lähde.
          `
        }
      }
    },
    times: {
      label: 'Aikaväli',
      facetResultsType: 'aikaa',
      shortDescription: 'Aikavälin kuvaus',
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
        label: 'Aikaväli',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Aikaväli, johon jokin tapahtuma sijoittuu.
            Tätä voidaan hyödyntää esimerkiksi, samaan aikaan kirjautuneiden opiskelijoiden listan luomiseen.
          </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Nimi',
          description: ''
        },
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        enrolled: {
          label: 'Kirjautumiset',
          description: `
            Henkilöt, jotka kirjautuivat yliopistoon tänä aikana.
          `
        },
        born: {
          label: 'Syntymät tai kasteet',
          description: `
            Lista henkilöistä, jotka syntyivät tai jotka kastettiin tänä aikana.
          `
        },
        deceased: {
          label: 'Kuolleet tai haudatut',
          description: `
          Lista tänä aikana kuolleista tai haudatuista.
          `
        },
        broader: {
          label: 'Laajempi aikaväli',
          description: `
          Laajempi aikaväli, joka sisältää tämän aikavälin.
          `
        },
        narrower: {
          label: 'Kapeampi aikaväli',
          description: `
          Lista kapeammista aikaväleistä, jotka tämä aikaväli sisältää.
          Huomaa, että näiden sisältämiä tapahtumia, ei näytetä tällä sivulla.
          `
        }
      }
    },
    titles: {
      label: 'Ammatit ja arvot',
      facetResultsType: 'ammattia tai arvoa',
      shortDescription: 'Kokoelma ylioppilasmatrikkelissa mainittuja ammatteja ja titteleitä',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Käytössä olevat välilehdet:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG>-välilehti näyttää ammattiin tai arvoon liittyvää tietoa riveittäin.
          </li>
          <li>
            <strong>SPARQL-kysely</strong>-välilehti avaa tulosten hakuun käytetyn SPARQL-kyselyn YASGUI-editorissa.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Ammatti tai arvo',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tällä sivulla on yksityiskohtaista tietoa tästä ammatista tai arvosta.
          </p>
          <h6 class="MuiTypography-root MuiTypography-h6">
          Välilehdet
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TAULUKKO</STRONG>-välilehti näyttää tähän ammattiin tai arvoon liittyvää tietoa riveittäin.
            </li>
            <li>
              <strong>AIKAJANA</strong>-välilehti taarjoaa aikajana visualisoinnin,
              jossa on laskettu vuosittain tähän ammattiin liittyvien tapahtumien kokonaismäärä.
            </li>
            <li>
              <strong>SPARQL-KYSELY</strong>-välilehti avaa tämän tiedon hakemiseen käytetyn SPARQL-kyselyn YASGUI-editorissa.
            </li>
          </ul>
          <br/>
        `
      },
      properties: {
        prefLabel: {
          label: 'Nimi',
          description: ''
        },
        altLabel: {
          label: 'Vaihtoehtoisia nimi',
          description: 'Lista vaihtoehtoisista nimistä tai lyhenteistä.'
        },
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        broader: {
          label: 'Hierarkia',
          description: `
            Ammattien tai titteleiden hierarkia.
          `
        },
        totalcount: {
          label: 'Henkilöiden määrä',
          description: `
            Lukumäärä henkilöistä, joilla on tämä ammatti tai arvo.
          `
        },
        related: {
          label: 'Liittyvät ammatit tai arvot',
          description: `
            Tämä lista näyttää 12 yleisintä muuta ammattia tai arvoa joita on hekilöillä,
            joilla on tämä ammatti tai arvo. Lukumäärä on ilmaistu suluissa.
          `
        },
        person: {
          label: 'Henkilöt',
          description: `
            Henkilöt, jotka liittyvät tähän ammattii tai arvoon.
            Huomaa: tämä lista voi sisältää sekä matrikkelin henkilöitä, että heidän sukulaisiaan.
          `
        },
        ammo: {
          label: 'AMMO',
          description: `
            Vastaava käsite AMMO/HISCO historiallisten ammattien ontologiassa.
          `
        },
        eventTimespan: {
          label: 'Päivämäärä',
          description: `
            Tapahtuman päivämäärä tai aika.
          `
        },
        place: {
          label: 'Liittyvä paikka',
          description: `
            Ammattiin tai arvoon liittyvät paikat
          `
        }
      }
    },
    studentNations: {
      label: 'Osakunnat',
      facetResultsType: 'osakuntaa',
      shortDescription: 'Tietoa osakunnista',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tämän näkymän kautta voi tarkastella matrikkeleissa mainittuihin osakuntiin liittyviä tietoja.
          1640–1852-matrikkelin henkilöille osakuntatieto on louhittu matrikkelin tekstistä.
          Matrikkelin 1853–1899 osalta tieto osakunnasta on ollut saatavissa omana tietokenttänään.

          <br/><br/>
          Turun akatemian ja Helsingin yliopiston osakuntien lisäksi mukana on eräitä ruotsalaisten yliopistojen osakuntia,
          jotka on mainittu henkilöiden kuvauksissa.

          <br/><br/>
          Lisää tietoa suomalaisten osakuntien historiasta voit lukea
          <a href="https://osakunta.fi/historia/" target='_blank' rel='noopener noreferrer'>
          täältä</a>.
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG> välilehti näyttää osakuntaan liittyvää tietoa riveittäin. Yksi rivi vastaa yhtä osakuntaa.
          </li>
          <li>
            <strong>SPARQL-kysely</strong>-välilehti avaa tulosten hakuun käytetyn SPARQL-kyselyn YASGUI-editorissa.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Osakunta',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Välilehdet:
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TAULUKKO</STRONG>-välilehti sisältää yksityiskohtaista tietoa tästä osakunnasta.
            </li>
            <li>
              <strong>AIKAJANA</strong> on aikajanakaavio, joka näyttää osakuntaan liittyvien vuosittaisten tapahtumien määrän.
            </li>
            <li>
              <strong>SPARQL-kysely</strong>-välilehti avaa tulosten hakuun käytetyn SPARQL-kyselyn YASGUI-editorissa.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Nimi',
          description: ''
        },
        altLabel: {
          label: 'Vaihtoehtoiset nimet',
          description: 'Lista vaihtoehtoisista nimistä tai lyhenteistä'
        },
        uri: {
          label: 'Tunniste',
          description: 'URI-tunniste, jota klikkaamalla voi selata siihen liittyvä dataa LDF.fi-datapalvelussa.'
        },
        related: {
          label: 'Liittyvät osakunnat',
          description: `
            Lista osakunnista joilla on yhteisiä jäseniä
          `
        },
        numberOfPeople: {
          label: 'Jäsenten lukumäärä',
          description: `
            Tähän osakuntaan liittyvien henkilöiden määrä
          `
        },
        person: {
          label: 'Jäsenet',
          description: `
            Tähän osakuntaan liittyvät henkilöt
          `
        },
        role: {
          label: 'Roolit',
          description: `
            Henkilöt jotka on mainittu teksteissä tämän osakunnan inspehtorina, kuraattorina, kunniajäsenä tai perustajajäsenenä.
          `
        },
        comment: {
          label: 'Kommentti',
          description: `
            Mahdollinen kommentti tästä osakunnasta
          `
        },
        externalLink: {
          label: 'Ulkoinen linkki',
          description: `
            Linkkejä ulkoisiin sivustoihin
          `
        }
      }
    }
  },
  aboutThePortalPartOne: `
  <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
  Tietoa portaalista
  </h1>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
  <i>Akatemiasampo – akateemiset henkilöt Suomessa 1640–1899</i> koostuu kahdesta osasta, 1) Akatemiasampo.fi-portaalista ja 2) 
  <a href="http://ldf.fi/dataset/yoma" target='_blank' rel='noopener noreferrer'>linkitetyn avoimen datan palvelusta,</a> 
  joka on julkaistu Linked Data Finland -palvelussa.
  </p>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
  Akatemiasampo.fi-portaali tarjoaa käyttäjälleen älykkäät haku- ja selailutoiminnat, 
  joihin on saumattomasti integroitu joukko data-analyyttisiä työkaluja ja visualisointeja henkilöiden ja henkilöryhmien 
  tutkimista ja analysointia varten verkostoina, tilastoina, erilaisina graafeina ja kartoilla. Portaalin käyttö ei edellytä 
  erityistä tietoteknistä osaamista.
  </p>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
  Akatemiasammon datapalvelun avoimet rajapinnat ja SPARQL-palvelupiste puolestaan tarjoavat 
  helppokäyttöisen mahdollisuuden uusien data-analyysien toteuttamiseen digitaalisten ihmistieteiden tutkijoille, 
  joilla on jonkin verran kokemusta semanttisen webin SPARQL-kyselykielestä ja ohjelmoinnista.
  </p>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
  Akatemiasampo on verkossa avoimesti toimiva prototyyppi, jonka on kehittänyt 
  <a href="https://seco.cs.aalto.fi/" target='_blank' rel='noopener noreferrer'>Semanttisen laskennan tutkimusryhmä (SeCo)</a>.
  </p>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
  Akatemiasampon henkilötiedot perustuvat kahteen lähteeseen:
  <ul class="MuiTypography-root MuiTypography-body1">
    <li>
    <a href="https://ylioppilasmatrikkeli.helsinki.fi/" target="_blank" rel="noopener noreferrer">Ylioppilasmatrikkeli 1640–1852</a>:
      joka sisältää noin 18000 opiskelijan tiedot, ja jonka on koonnut Yrjö Kotivuori.
    </li>
    <li>
    <a href="https://ylioppilasmatrikkeli.helsinki.fi/1853-1899/" target="_blank" rel="noopener noreferrer">Ylioppilasmatrikkeli 1853–1899</a>:
    joka sisältää noin 9500 opiskelijan tiedot, ja jonka on koonnut Veli-Matti Autio.
    </li>
  </ul>
  </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Ohjeet
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Akatemiasammon hakuominaisuudet perustuvat
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      fasettihaku</a>-paradigmaan. Oletuksena kukin näkymä näytää kaikki tulokset haettavasta luokasta (Henkilö, Paikka, Osakunta...)
      Tätä tulosjoukkoa voi rajata (tietokoneen näytöllä vasemmalla olevista) suodattimista.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Suodattimen käyttö
    </h2>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Arvojen valinta suodattimesta (fasetista)
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Kaikki suodattimeen liittyvät mahdolliset arvot on esitetty joko listana, tai hierarkisena puuna.
    Tämän valinnan tuottamien tulosten määrä on suluissa nimen perässä. Kun vainta on tehty, hakujoukko päivitetään automaattisesti.
    Myös muiden suodattimien valinnat päivitetään.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Samasta suodattimesta voi tehdä useita valintoja. Useiden valintojen tekeminen yhdestä suodattimestä
    luo tulosjoukon johon kuuluvat kaikki valitun kriteerin täyttävät tulokset.
    Esimerkiksi valitsemalla <i>Turku</i> ja <i>Viipuri</i> syntymäpaikka-suodattimesta
      saa valintajoukon joka sisältää henkilöt joilla on syntymäpaikkana <i>Turku</i> <strong>TAI</strong> <i>Viipuri</i>.
      Muista suodattimista tehdyt valinnat taas rajaavat hakujoukkoa pienemmäksi.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Valitut arvot näkyvät suodattimien listan yläpuolella aktiiviset suodattimet -listana.
    Voit poistaa valintoja, joko tästä listasta, tai suoraan suodattimesta.
    </p>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Hakeminen suodattimen sisällä
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Voit hakea arvoa suodattimen sisällä käyttämällä hakukenttää, joka on suodattimen yläosassa.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Useiden suodattimien yhtäaikainen käyttö
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Fasettihaun teho tulee esiin useita suodattimia yhtä aikaa käyttäessä.
    Suodattimien välillä käytetään looginen JA -operaatiota. Tämä tarkoittaa,
    että eri faseteista tehdyt valinnat rajoittavat hakujoukkoa. Esimerkiksi jos valitset paikat <i>Turku</i>
      ja <i>Viipuri</i> syntymäpaikoiksi sekä <i>Helsinki</i> ja
      <i> Tukholma</i> kuolinpaikoiksi, tuloksia rajoitetaan seuraavasti:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Syntymäpaikka: <i>Turku</i> <strong>TAI</strong> syntymäpaikka: <i>Viipuri</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>JA</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Kuolinpaikka: <i>Helsinki</i> <strong>TAI</strong> Kuolinpaikka: <i>Tukholma</i>)
    </p>
  `
}
