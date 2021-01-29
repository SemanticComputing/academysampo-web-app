export default {
  languageLabel: 'Suomi',
  appTitle: {
    short: 'Akatemiasampo',
    long: 'Akatemiasampo',
    subheading: `
      Suomalaiset akateemiset henkilöt 1640&ndash;1899
    `
  },
  appDescription: '',
  selectPerspective: 'Valitse näkymä tiedon hakuun:',
  mainPageImageLicence: 'Images used under license from Wikimedia Commons',
  topBar: {
    feedback: 'palaute',
    info: {
      info: 'Info',
      blog: 'Projektin kotisivu',
      blogUrl: 'https://seco.cs.aalto.fi/projects/yo-matrikkelit/',
      aboutThePortal: 'Tietoa portaalista'
    },
    searchBarPlaceHolder: 'Etsi kaikesta sisällöstä',
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
    },
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
    by_year: 'vuosittain',
    placeByYear: 'Aikajana tapahtumille',
    placeMap: 'Kartta',
    titleByYear: 'Aikajana',
    export: 'Tuo',
    nationByYear: 'Vuosittain',
  },
  table: {
    rowsPerPage: 'Riviä sivulla',
    of: ''
  },
  lineChart: {
    Birth: 'Syntyvä',
    Enrollment: 'Kirjautuminen',
    Death: 'Kuolema',
    Event: 'Tapahtuma'
  },
  exportToYasgui: 'avaa tulosten kysely yasgui sparql editorissa',
  openInLinkedDataBrowser: 'avaa linkitetyn datan selaimessa',
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Tämä sivu tarjoaa ihmisluettavan tiivistelmän tähän {entity} resurssiin liittyvistä
      asioista. Klikkaa "avaa linkitetyn datan selaimessa" nappia tarkastellaksesi
      kaikkia tähän resurssiin liittyviä luokkia ja ominaisuuksia.
      </p>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Viitataksesi tähän resurssiin käytä tätä url-osoitetta. Voit käyttää osoitetta
      myös palataksesi tähän resurssiin milloin vain.
      </p>
    `,
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
    people: {
      label: 'Henkilöt',
      facetResultsType: 'henkilöt',
      shortDescription: 'Selaa tietoja 28000 opiskelijasta ja heidän sukulaisistaan',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tämän näkymän kautta voit tarkastela opiskelijoihin liittyvää dataa.
          Data on luotu kahden pääasiallisen lähteen perusteella:
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/" target="_blank" rel="noopener noreferrer">Ylioppilasmatrikkeli 1640–1852</a>:
             joka sisältää noin 18000 opiskelijan tiedot, ja jonka on koonnut Yrjö Kotivuori.
            </li>
            <li>
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/1853-1899/" target="_blank" rel="noopener noreferrer">Ylioppilasmatrikkeli 1853–1899</a>:
            joka sisältää noin 9500 opiskelijan tiedot ja jonka on koonnut Veli-Matti Autio.
            </li>
          </ul>
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Enemmän tietoa projektista voi lukea sivustolta <a href="https://seco.cs.aalto.fi/projects/yo-matrikkelit/"  target="_blank" rel="noopener noreferrer">projektin blogi</a>.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Käytä tätä näkymää käsitelläksesi matrikkelin henkilöiden tietoja.
          Sivulla <a href="/instructions">ohjeet</a> on tietoa hakuominaisuuksien käytöstä.
          Tuoksia voi tarkastella seuraavien välilähtien kautta:
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG> tämä näkymä näyttää opiskelijoiden tietoja riveittäin,
            ja yksi rivi vastaa yhden henkilön tietoja.
            Kuvien lähde on Wikidata/Wikimedia Commons.
          </li>
          <li>
            <strong>VUOSITTAIN</strong> on aikajanakaavio, joka näyttää vuosittain kuinka monta opiskelijaa
            on kirjautunut, kuollut tai syntynyt.
          </li>
          <li>
            <strong>MUUTTOLIIKE</STRONG> visualisoi yhteyttä syntymä- ja kuolinpaikkojen välillä.
          </li>
          <li>
            <strong>KARTTA</strong> visualisoi kartalla henkilöihin liittyvien aktiviteettien paikkoja, kuten opiskelupaikkoja tai työhön liittyviä paikkoja.
          </li>
          <li>
            <strong>VERKOSTO</strong> visualisoi sosiaalista verkostoa opiskelija-oppias suhteiden osalta.
              Huomaa, että visualisoinnissa näkiviä henkilöitä on rajoitettu suorituskyvyn vuoksi. Opettaja-oppilas verkostoja
              eimole saatavilla kaikille henkilöille, joten joillain rajauksilla ei verkostoa löydy lainkaan.
              Lisää verkostovisualisointoja yksittäiseen henkilöön keskittyen, voi löytää henkilön kotisivulta.
          </li>
          <li>
            <strong>TUO</strong> tulosten hakuun käytetty SPARQL kysely YASGUI editorissa.
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
              <strong>TAULUKKO</STRONG> yksityiskohtaista tietoa henkilöstä.
            </li>
            <li>
              <strong>PERHESUHTEET</strong> visualisointi henkilön perhesuhteiden verkostosta.
              Huomaa, että joillain henkilöillä ei ole datassa merkittyjä sukulaisia.
            </li>
            <li>
              <strong>AKATEEMISET SUHTEET</STRONG> visualisoi henkilön opettaja-oppilas suhteita.
              Huomaa, että joillain henkilöillä ei ole datassa merkittyjä akateemisia suhteita.
            </li>
            <li>
              <strong>YHTEYDET</strong> näyttää henkilön yhteydet toisiin henkilöihin esimerkiksi ammattien ja paikkojen kautta.
            </li>
            <li>
              <strong>SUHTEET</strong>  visualisoi henkilön yhteyksiä esimerkiksi ammatteihin ja paikkoihin.
            </li>
            <li>
              <strong>TUO</strong> tulosten hakuun käytetty SPARQL kysely YASGUI editorissa.
            </li>
          </ul>
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Tämän resurssin tunniste ldf.fi-tiettokannassa'
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
          VAihtoehtoisia nimiä.
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
            Huomaa, että tämä tieto on olemassa vain 1640–1852 matrikkelin henkilöille.
          `
        },
        sourcereference: {
          label: 'Viite lähteeseen',
          description: 'Viite lähteeseen'
        },
        category: {
          label: 'Kategoria',
          description: `
            Opiskelijan kategoriat.
            Huomaa, että tämä tieto on olemassa vain 1640–1852 matrikkelin henkilöille.
          `
        },
        reference: {
          label: 'Kirjallisuusviitteet',
          description: `
            Kirjoja joissa tietoa tästä henkilöstä
            Huomaa, että tämä tieto on olemassa vain 1640–1852 matrikkelin henkilöille.
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
          label: 'Ammatti/titteli',
          description: `
            Henkilön ammatit tai erilaiset tittelit.
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
            Henkilön osakunta
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
          label: 'kuoleman tai hautauksen ajankohta',
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
          label: 'Lähde',
          description: `
            Tiedon lähde.
            Lähteinä ovat ylioppilasmatrikkelit vuosilta 1640–1852 ja 1853–1899.
          `
        }
      }
    },
    places: {
      label: 'Paikat',
      facetResultsType: 'paikat',
      shortDescription: 'Selaa paikkoihin liittyviä tietoja',
      longDescription: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Käytä tätä näkymää saadaksesi tietoa paikoista joihin datassa olevat henkilöt liittyvät.
      Akatemiasammon paikot koostuvat maista, lääneistä, kaupungeista, kylistä ja kaupunginosista, sekä myös yksittäisistä rakennuksista.
      PAikkoihin liittyvää dataa on haettu useasta lähteestä:
      Finnish Geographic Names (nykyisen Suomen ja Karjalan paikoille),
      Geonames (nykyisen Ruotsin paikoille),
      YSO-paikat ja
      Wikidata (kuvat).
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Sivulla <a href="/instructions">ohjeet</a> on tietoa hakuominaisukksien käytöstä.
    Tuoksia voi tarkastella seuraavien välilähtien kautta:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1">
      <li>
        <strong>TAULUKKO</STRONG> sisältää tietoa AKatemiasammon paikoista riveittäin. Yksi rivi vastaa yhden paikan tietoja.
      </li>
      <li>
        <strong>KARTTA</strong> näyttää kartalla paikkoja joissa on ollut jotain toimintaa.
      </li>
      <li>
        <strong>TUO</strong> tulosten hakuun köyetty SPARQL kysely YASGUI editorissa.
      </li>
    </ul>
      `,
      instancePage: {
        label: 'Paikka',
        description: `
        <h6 class="MuiTypography-root MuiTypography-h6">
          Käytössä olevat välilehdet
        </h6>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG> yksityiskohtaista tietoa tästä oaikasta.
          </li>
          <li>
            <strong>KARTTA</STRONG> näyttää tämän paikan ja siihen kuuluvat paikat kartallla.
          </li>
          <li>
            <strong>TAPAHTUMIEN AIKAJANA</strong> on aikajanakaavio joka näyttää paikkaan liittyvien vuosittaisten
            tapahtumien, syntymien sekä kuolemien määrän,
          </li>
          <li>
            <strong>TUO</strong> tulosten hakuun köyetty SPARQL kysely YASGUI editorissa.
          </li>
        </ul>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph"></p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Resurssin tunniste ldf.fi-tietokannassa'
        },
        prefLabel: {
          label: 'Nimi',
          description: 'Paikannimi.'
        },
        altLabel: {
          label: 'Vaihtoehtoinen nimi',
          description: 'VAihtoehtoinen, esimerkiksi vieraskielinen, nimi paikalle'
        },
        broader: {
          label: 'Laajempi paikka',
          description: `
          Laajempi alue, jonka osa tämä paikka on.
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
          Linkki ulkoiseen tietokantaan
          `
        },
        narrower: {
          label: 'Sisältää paikat',
          description: `
          Pienempi geografinen alue, joka on osa tätä.
          `
        },
        num_activies: {
          label: 'Viitteiden määrä',
          description: `
            Tähän paikaan kohdistuvien viitteiden määrä tässä tietokannassa
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
            MAhdollinen kuva tästä paikasta. Joillain paikoilla on useampi kuin yksi kuva. lähde: Wikimedia Commons.
          `
        },
        title: {
          label: 'Liittyvät ammatit ja tittelit',
          description: `
          TGÄhän paikkaan liittyviä ammatteja ja titteleitä
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
      facetResultsType: 'organisaatiot',
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
            Huomaa, että henkilö on yhdistetty organisaatiooon vain jos organisaatio on mainittu hänen matrikkelitekstissään,
            ja joissain tapauksissa organisaation voi päätellä vain henkilön tittelistä.
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
          description: 'Lista vaihtoisista nimistä tai lyhenteistä'
        },
        uri: {
          label: 'URI',
          description: 'Resurssin URI tunniste.'
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
      label: 'Kategoriat',
      facetResultsType: 'kategoriat',
      shortDescription: 'Kategoriat',
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
        label: 'Kategoria',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            KAtegoriat ovat ylippoilasmatrikkelin luokittelukiteerejä. Kts. esimerkiksi:
            <a href="https://ylioppilasmatrikkeli.helsinki.fi/hakukriteeri_1.php"
              target='_blank' rel='noopener noreferrer'>
              Ylioppilasmatrikkeli 1640–1852</a>

            Kategoriat voivat olla esimerkiksi henkilön syntymäpaikkoja tai kouluja.

            Tämä tieto on suoraan saatavilla vain 1640–1852 matrikkelin henkilöille, mutta vastaava
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
          label: 'URI',
          description: 'Resurssin Uniform Resource Identifier tunniste.'
        },
        person: {
          label: 'Henkilöt',
          description: `
            Tähän kategoriaan kuuluvat henkilöt
          `
        },
        broader: {
          label: 'Ylempi kategoria',
          description: `
          Laajempi kategoria
          `
        },
        narrower: {
          label: 'Alakategoriat',
          description: `
          Lista alakategorioista
          `
        },
        place: {
          label: 'Liittyvä paikka',
          description: `
            Tähän kategoriaan liittyvät paikat
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
          Tämä viitemateriaali on saatavilla vain vuosien 1640–1852 matrikkelin henkilöille.
      </p>
        `
      },
      properties: {
        prefLabel: {
          label: 'Nimi',
          description: ''
        },
        uri: {
          label: 'URI',
          description: 'Resurssin Uniform Resource Identifier tunniste'
        },
        person: {
          label: 'Henkilöt',
          description: `
            Tässä viitemateriaalissa mainitut henkilöt
          `
        },
        broader: {
          label: 'Ylempi kategoria',
          description: `
          Viitemateriaalin ylempi kategoria
          `
        },
        narrower: {
          label: 'Alakategoria',
          description: `
          Alakategorioiden lista
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
          label: 'URI',
          description: 'Tämän resurssin tunniste ldf.fi-tietokannassa'
        },
        prefLabel: {
          label: 'Nimi',
          description: `
            Henkilön nimi standarsoidussa muodossa
          `
        },
        gender: {
          label: 'Sukupuoli',
          description: `
            Henkilön sukupuoli
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
          label: 'Ammatti tai titteli',
          description: `
            HEnkilön ammatti tai titteli
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
            Huomaa, että tämä lista on automaattisesti generoitu ja voi sisältää virheitä
          `
        },
        birthPlace: {
          label: 'Syntymäpaikka',
          description: `
            Henkilön syntymäpaikka
          `
        },
        birthDateTimespan: {
          label: 'syntymäpaikasta',
          description: `
            Henkilön syntymäaika
          `
        },
        externalLink: {
          label: 'Ulkoinen linkki',
          description: `
            Linkki henkilön tietoihin ulkoisessa tietokannassa
          `
        },
        deathDateTimespan: {
          label: 'Kuoleman ajankohta',
          description: `
            Ajankohta jolloin henkilö on kuollut
          `
        },
        deathPlace: {
          label: 'Kuolinpaikka',
          description: `
            Paikka jossa henkilö kuoli
          `
        },
        source: {
          label: 'Lähde',
          description: `
            Tiedon lähde
          `
        }
      }
    },
    times: {
      label: 'Aikaväli',
      facetResultsType: 'ajat',
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
          label: 'URI',
          description: 'Uniform Resource Identifier tunniste.'
        },
        enrolled: {
          label: 'Kirjautumiset',
          description: `
            Henkilöt, jotka kirjautuivat yliopistoon tänä aikana
          `
        },
        born: {
          label: 'Syntymät tai kasteet',
          description: `
            Lista henkilöistä, jotka syntyivät tai jotka kastettiin tänä aikana
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
          Laajempi aikaväli, joka sisältää tämän aikavälin
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
      label: 'Ammatit ja tittelit',
      facetResultsType: 'ammattia tai titteliä',
      shortDescription: 'Kokoelma ylioppilasmatrikkelissa mainittuja ammatteja ja titteleitä.',
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
        label: 'Ammatti tai titteli',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          </p>
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
          label: 'URI',
          description: 'Uniform Resource Identifier.'
        },
        broader: {
          label: 'Hierarkia',
          description: `
            Ammattien tai titteleiden hierarkia
          `
        },
        totalcount: {
          label: 'Henkilöiden määrä',
          description: `
            Lukumäärä henkilöistä, joilla on tämä ammatti tai titteli
          `
        },
        related: {
          label: 'Liittyvät ammatit tai tittelit',
          description: `
            Tämä lista näyttää 12 yleisintä muuta ammattia tai titteliä joita on hekilöillä,
            joilla on tämä ammatti tai titteli. Lukumäärä on ilmaistu suluissa.
          `
        },
        person: {
          label: 'Henkilöt',
          description: `
            Henkilöt, jotka liittyvät tähän ammattii tai titteliin.
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
            Ammattiin tai titteliin liittyvät paikat
          `
        }
      }
    },
    studentNations: {
      label: 'Osakunnat',
      facetResultsType: 'osakunnat',
      shortDescription: 'Osakunnat.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tämän näkymän kautta voi tarkastella datassa oleviin osakuntiin liittyviä tietoja.
          1640–1852 matrikkelin henkilöille osakuntatieto on louhittu matrikkelin tekstistä-
          1853–1899 tieto osakunnasta on ollut omana kenttänään.

          <br/><br/>
          Turun akatemian ja Helsingin yliopiston osakuntien lisäksi mukana on eräitä ruotsalaisten yliopistojen osakuntia,
          jotka on mainittu henkilöiden kuvauksissa.

          <br/><br/>
          Lisää tietoa suomalaisten osakuntien historiasta voit lukea:
          <a href="https://osakunta.fi/historia/" target='_blank' rel='noopener noreferrer'>
          täältä</a>.
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG> välilehti näyttää osakuntaan liittyvää tietoa riveittäin. Yksi rivi vastaa yhtä osakuntaa.
          </li>
          <li>
            <strong>TUO</strong> tietojen hakuun käytetty SPARQL kysely YASGUI editorissa.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Osakunta',
        description: `
          <h6 class="MuiTypography-root MuiTypography-h6">
            Välilehdet
          </h6>
          <ul class="MuiTypography-root MuiTypography-body1">
            <li>
              <strong>TAULUKKO</STRONG> välilehti sisältää yksityiskohtaista tietoa tästä osakunnasta.
            </li>
            <li>
              <strong>VUOSITTAIN</strong> on aikajanakaavio, joka näyttää osakuntaan liittyvien vuosittaisten tapahtumien määrän.
            </li>
            <li>
              <strong>TUO</strong> tiedon hakemiseen käytetty SPARQL kysely YASGUI editorissa.
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
          label: 'URI',
          description: 'Uniform Resource Identifier.'
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
  Akatemiasampo koostuu kahdesta osasta. 1) Akatemiasampo portaali, joka on ihmiskäyttäjille suunnattu sovellus,
  vuosilta 1640–1899 olevien suomalaisten akateemisten henkilöiden tutkimiseen.
  2) Datapalvelu johon portaali perustuu, julkaisee dataa Ylioppilasmatrikkelit 1640–1852 ja 1853–1899 lähdemateriaaliin perustuen.
  Datapalvelua voi käyttää vapaasti sovelluskehityksessä ja tutkimuksessa, ja se on käytettävissä LDF.fi palvelun kautta.
  </p>
  <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
  Akatemiasampo on verkossa avoimesti toimiva prototyyppi. Sen on kehittänyt Semanttisen laskennan tutkimusryhmä (SeCo).
  </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Ohjeet
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Akatemiasammon hakuominaisuudet perustuvat
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      fasettihaku</a> paradigmaan. Oletuksena kukin näkymä näytää kaikki tulokset haettavasta luokasta (Henkilö, Paikka, Osakunta...)
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
    Esimerkiksi valitsemalla <i>Turku</i> ja <i>Viipuri</i> syntymäpaikka suodattimesta
      saa valintajoukon joka sisältää henkilöt joilla on syntymäoaikkana <i>Turku</i> <strong>TAI</strong> <i>Viipuri</i>.
      Muista suodattimista tehdyt valinnat taas rajaavat hakujoukkoa pienemmäksi.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Valitut arvot näkyvät suodattimien listan yläpuolella aktiiviset suodattimet listana.
    Voit poistaa valintoja, joka tästä listasta, tai suoraan suodattimesta.
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
    Fasettihaun teho tulee esiin useita suodattimia yhtö aikaa käyttäessä.
    Suodattimien välillä käytetään looginen JA operaatiota. Tämä tarkoittaa,
    että eri faseteista tehdyt valinnat rajoittavat hakujoukkoa. Esmirkiksi jos valitset paikat <i>Turku</i>
      ja <i>Viipuri</i> syntymäpaikoiksi sekä <i>Helsinki</i> ja
      <i> Tukholma</i> kuolinpaikoiksi, tuloksia rajoitetaan seuraavasti:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Syntymäpaikka: <i>Turku</i> <strong>TAI</strong> syntymäpaikkah: <i>Viipuri</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>JA</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Kuolinpaikka: <i>Helsinki</i> <strong>TAI</strong> Kuolinpaikka: <i>Tukholma</i>)
    </p>
  `
}
