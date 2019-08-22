import React from 'react'

export default class CreateTrack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      sound_cloud_url: "",
      youtube_url: "",
      primary_tag: "",
      artist_input: "",
      album_input: {}
    }
  }
 
  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTrack(this.state)
    .then(payload => {
      return this.props.history.push(`/tracks/${payload.track.id}`)
    })
    
  }

  albumScript(e){
    let id = Object.keys(this.state.album_input).length;
    this.state.album_input[id] = "";
    let ele = document.getElementById("add-album-script");
    let outerDiv = document.createElement("div");
    let innerInput = document.createElement("input");
    innerInput.setAttribute('size', '30');
    innerInput.setAttribute('type', 'text');
    let that = this;
    innerInput.addEventListener('change', (e) => {
      // let id = Object.keys(that.state.album_input).length;
      let dummy = that.state.album_input;
      dummy[id] = e.target.value;
      that.setState({album_input: dummy});
    });
    let innerDiv = document.createElement("div");
    innerDiv.appendChild(innerInput);
    outerDiv.appendChild(innerDiv);
    
    ele.appendChild(outerDiv);
  }

  render() {
    
    return(
      <div className="add-track-color">
         <div className="add-track-container">
          <div className="add-track-main">
            <h1>Add Song</h1>
            <small>* required</small>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <h3>Primary Info</h3>
              <div className="add-track-primary-info">
                <div>
                  <label>
                    By * <br/>
                    <input type="text" 
                      placeholder="The primary artist, author, creator, etc."
                      value={this.state.artist_input}
                      onChange={this.update("artist_input")}
                    />
                  </label>
                  <br/>
                  <label>
                    Title * <br/>
                    <input type="text"
                      placeholder="Title"
                      value={this.state.title}
                      onChange={this.update("title")}
                    />
                  </label>
                  <label className="add-track-primary-info-primary-tag">Primary tag *</label>
                  <div className="primary-tag-radio">
                    <div>
                      <label>
                        <input type="radio" name="tag"
                          value="rap"
                          onClick={this.update("primary_tag")}
                        />
                        Rap
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="radio" name="tag" 
                          value="pop"
                          onClick={this.update("primary_tag")}
                        />
                        Pop
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="radio" name="tag"
                          value="r&b"
                          onClick={this.update("primary_tag")}
                        />
                        R&B
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="radio" name="tag"
                          value="rock"
                          onClick={this.update("primary_tag")}
                        />
                         Rock
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="radio" name="tag"
                          value="country"
                          onClick={this.update("primary_tag")}
                        />
                         Country
                      </label>
                    </div>
                      <div>
                        <label>
                          <input type="radio" name="tag"
                          value="non music"
                          onClick={this.update("primary_tag")}
                          />
                          Non Music
                        </label>
                      </div>
                    
                  </div>
                    <span>Note: If you're not sure which tag to use please 
                      select “Pop”— you can add secondary tags later
                    </span>
                </div>
                <div>
                </div> 
              </div>
              <div className="add-track-lyrics">
                <div className="add-track-lyrics-column-1">
                  <label htmlFor="create-song-form-lyrics-section">Lyrics *</label>
                  <br/>
                  <textarea 
                    onChange={this.update("body")}
                    value={this.state.body}
                  ></textarea>
                </div>
                <div></div>
                </div>
                <h3 className="additional-info-header">Audio & Video</h3>
                <div className="additional-info">
                  <div className="additional-info-audio-video">
                    <label>
                      SOUNDCLOUD URL:
                      <input 
                        onChange={this.update("sound_cloud_url")}
                        value={this.state.soundCloudUrl}
                        />
                    </label>

                    <label>
                      YOUTUBE URL:
                        <input 
                        onChange={this.update("youtube_url")}
                        value={this.state.youtubeUrl}
                        />
                    </label>
                  </div>
                  <div className="additional-info-audio-video album">
                    <div className="heading">Albums, and additional tags</div>
                      <div>
                        <label>Album:</label>
                        <br/>
                        <a onClick={this.albumScript.bind(this)} href="#/add-song">Add album</a>
                    <div id="add-album-script"></div> 
                      </div>
                      
                    <label className="tags">Tags:</label>
                    <div className="tags-div">
                      <select className="tags-select">
                        <option value="2326">Adult Contemporary</option>
                        <option value="3623">Gothic Literature</option>
                        <option value="2330">American Idol</option>
                        <option value="3603">Belize</option>
                        <option value="2403">Hardcore Punk</option>
                        <option value="3646">Romanized</option>
                        <option value="2721">Greece</option>
                        <option value="2866">Skit</option>
                        <option value="1882">Halloween</option>
                        <option value="3448">Arrocha</option>
                        <option value="3649">Horror Punk</option>
                        <option value="3467">Persian Rock</option>
                        <option value="3652">Panamá</option>
                        <option value="3645">Polska Tłumaczenia</option>
                        <option value="3679">Spanish Pop</option>
                        <option value="435">Reggae</option>
                        <option value="3458">Marchinha</option>
                        <option value="3620">Doteli</option>
                        <option value="3634">Maskhandi</option>
                        <option value="3534">Vallenato</option>
                        <option value="3533">En Català</option>
                        <option value="3644">Azərbaycan Tərcümə</option>
                        <option value="2191">Clean Up</option>
                        <option value="3604">Trinidad &amp; Tobago</option>
                        <option value="2947">Samba</option>
                        <option value="2365">Thrash Metal</option>
                        <option value="1856">Medicine</option>
                        <option value="2948">Blue Note</option>
                        <option value="2281">Tradução</option>
                        <option value="3619">Video Game</option>
                        <option value="2187">Editorial</option>
                        <option value="2372">Baroque Pop</option>
                        <option value="2398">Melodic Metalcore</option>
                        <option value="3617">Nep-Hop</option>
                        <option value="2937">Kizomba</option>
                        <option value="3605">Tanzania</option>
                        <option value="3671">Goa Trans</option>
                        <option value="3508">Israeli Yam</option>
                        <option value="2331">YouTube</option>
                        <option value="2601">Indie Rap</option>
                        <option value="3466">Togo</option>
                        <option value="2974">Chillstep</option>
                        <option value="3608">Nigeria</option>
                        <option value="509">South Africa</option>
                        <option value="3606">Bongo Flava</option>
                        <option value="2741">Gangsta Rap</option>
                        <option value="3672">Goa Trance</option>
                        <option value="3635">MPB (Música Popular Brasileira)</option>
                        <option value="2013">BMCL Rap Battle</option>
                        <option value="3463">Plug</option>
                        <option value="3100">Industrial Metal</option>
                        <option value="2059">Playstation</option>
                        <option value="3607">Ghana</option>
                        <option value="2585">Booska-P</option>
                        <option value="2002">Climate Change</option>
                        <option value="2364">Groove Metal</option>
                        <option value="1886">Symbol</option>
                        <option value="3447">Traducción Al Español</option>
                        <option value="1920">Latin Epigraphy</option>
                        <option value="2506">Deutsche Klassik</option>
                        <option value="2576">JBB (JuliensBlogBattle)</option>
                        <option value="1945">Latin Literature</option>
                        <option value="1883">Island Music</option>
                        <option value="1907">Reality TV</option>
                        <option value="3446">Persian Traditional Music</option>
                        <option value="2731">Sheet Music</option>
                        <option value="3489">UK Garage</option>
                        <option value="3460">Cinematic</option>
                        <option value="3471">Cajun</option>
                        <option value="3472">Broadway</option>
                        <option value="3478">Melodic Dubstep</option>
                        <option value="3459">Corrido</option>
                        <option value="3474">Garage House</option>
                        <option value="3504">الترجمة العربية (Arabic Translation)</option>
                        <option value="1831">Skyrock</option>
                        <option value="3477">Honky Tonk</option>
                        <option value="3488">Zydeco</option>
                        <option value="2374">Latin Music</option>
                        <option value="1834">Macedonian Rap</option>
                        <option value="1989">Tibet</option>
                        <option value="2164">Polska Literatura</option>
                        <option value="2369">Trance</option>
                        <option value="3450">Peru</option>
                        <option value="2607">Memes</option>
                        <option value="2764">Afrika</option>
                        <option value="2701">J-Pop</option>
                        <option value="3451">Bolivia</option>
                        <option value="3449">Chile</option>
                        <option value="3452">Argentina</option>
                        <option value="3461">Easy Listening</option>
                        <option value="3475">Garage Rock</option>
                        <option value="3544">Northern Ireland</option>
                        <option value="2444">Italian Pop</option>
                        <option value="63">Jazz</option>
                        <option value="2194">Embryo Nagrania</option>
                        <option value="1048">Metalcore</option>
                        <option value="2032">Horrorcore</option>
                        <option value="3599">Candombe</option>
                        <option value="1939">French Screen</option>
                        <option value="2443">Glam Rock</option>
                        <option value="3116">Chamber Music</option>
                        <option value="1847">Italian Literature</option>
                        <option value="2840">Stoner Metal</option>
                        <option value="2435">Modern Greek Literature</option>
                        <option value="3669">Spanish Rock</option>
                        <option value="347">Translation</option>
                        <option value="2201">Polska</option>
                        <option value="2361">Rockabilly</option>
                        <option value="3118">Noise</option>
                        <option value="3561">Israeli Poetry</option>
                        <option value="3545">DMV</option>
                        <option value="3647">Ancient Greek Literature</option>
                        <option value="3562">Mallorca</option>
                        <option value="3601">Development</option>
                        <option value="3119">Indian Classical</option>
                        <option value="3546"> ترجمه ی فارسی (Farsi Translation)</option>
                        <option value="2373">Latin Rock</option>
                        <option value="2457">Electro-Funk</option>
                        <option value="2367">Classical Crossover</option>
                        <option value="2478">Doo-Wop</option>
                        <option value="2405">Deutsche Übersetzungen</option>
                        <option value="2056">Nintendo</option>
                        <option value="2433">Drumstep</option>
                        <option value="3183">Русское аренби (Russian R&amp;B)</option>
                        <option value="3133">Goregrind</option>
                        <option value="1875">Numerology</option>
                        <option value="1873">Beatbox</option>
                        <option value="3677">Skacore</option>
                        <option value="2619">Spanish Music</option>
                        <option value="3134">Bollywood</option>
                        <option value="3673">Latin Jazz</option>
                        <option value="3138">Queercore</option>
                        <option value="3674">Aussie Grime</option>
                        <option value="3675">Aussie Drill</option>
                        <option value="3676">Riot Grrrl</option>
                        <option value="2503">Alternative R&amp;B</option>
                        <option value="2244">Live Broadcast</option>
                        <option value="2222">SHADYXV</option>
                        <option value="2213">Moldovan Pop</option>
                        <option value="3462">Electronic Pop</option>
                        <option value="1960">Nu-Metal</option>
                        <option value="1424">Law </option>
                        <option value="3487">Irish Folk</option>
                        <option value="2943">Post-Punk</option>
                        <option value="3468">Bosnia</option>
                        <option value="2245">Mini Theater</option>
                        <option value="2276">Ministry</option>
                        <option value="3524">Pakistani</option>
                        <option value="2570">Cityofprint</option>
                        <option value="3432">Acid Jazz</option>
                        <option value="2455">Scandipop</option>
                        <option value="2516">Lounge</option>
                        <option value="3438">Kurdish</option>
                        <option value="2841">Sludge Metal</option>
                        <option value="3003">Crust Punk</option>
                        <option value="2855">Industrial</option>
                        <option value="2621">Synth Rock</option>
                        <option value="1995">Theatre</option>
                        <option value="1993">Fairy Tale / Nursery Rhyme</option>
                        <option value="558">Cuba</option>
                        <option value="3419">Country Rap</option>
                        <option value="3553">Anticon</option>
                        <option value="2453">Soca</option>
                        <option value="3493">Christian Pop</option>
                        <option value="2037">Post-Rock</option>
                        <option value="3552">Tribal</option>
                        <option value="568">Blog</option>
                        <option value="3470">Christmas Rap</option>
                        <option value="3543">Norteña</option>
                        <option value="3491">Cybergrind</option>
                        <option value="2502">East Coast</option>
                        <option value="3555">Interlude</option>
                        <option value="1900">Script</option>
                        <option value="1915">French Law</option>
                        <option value="3670">Rap Rock</option>
                        <option value="3492">Christian Metal</option>
                        <option value="3556">Bra Musik</option>
                        <option value="3528">Afro-Jazz</option>
                        <option value="3527">Gqom</option>
                        <option value="2138">Red Bull Culture Clash</option>
                        <option value="2938">Israeli Folk</option>
                        <option value="3072">Gothic Rock</option>
                        <option value="3597">Indian Pop</option>
                        <option value="3536">Progressive Metalcore</option>
                        <option value="2360">Blues Rock</option>
                        <option value="2518">Israeli Music</option>
                        <option value="2945">Em Português</option>
                        <option value="502">United Nations</option>
                        <option value="2559">Merengue</option>
                        <option value="505">Folk</option>
                        <option value="3563">Saudi Rap | راب سعودي</option>
                        <option value="3659">Lok-Geet</option>
                        <option value="3660">Lok-Dohori</option>
                        <option value="553">ICD-9 Coding</option>
                        <option value="2564">Calypso</option>
                        <option value="3513">Togo Trap</option>
                        <option value="2608">Polish Hip-Hop Festival</option>
                        <option value="3510">Psychedelic Soul</option>
                        <option value="3511">Eurobeat</option>
                        <option value="3505">Variété Française</option>
                        <option value="1859">Myth And Legend</option>
                        <option value="3004">Drone Metal</option>
                        <option value="3514">Togo Rap</option>
                        <option value="3512">Togo Pop</option>
                        <option value="3653">L'Ordre Du Périph</option>
                        <option value="3490">Technical Death Metal</option>
                        <option value="3631">South Africa Translation</option>
                        <option value="2770">Concert</option>
                        <option value="3522">Venezuela</option>
                        <option value="3554">Brainfeeder</option>
                        <option value="1434">Rap Genius</option>
                        <option value="3547">Louisiana Blues</option>
                        <option value="3525">Galega</option>
                        <option value="3494">Christian Rap</option>
                        <option value="2839">Djent</option>
                        <option value="886">Soundtrack</option>
                        <option value="3500">Time Lord Rock (Trock)</option>
                        <option value="1916">Jobs</option>
                        <option value="2375">Dance-Pop</option>
                        <option value="3267">Traduction Française </option>
                        <option value="3667">Guiné-Bissau</option>
                        <option value="3499">Filk</option>
                        <option value="2581">Czech </option>
                        <option value="2579">Electro-Swing</option>
                        <option value="3678">Grime Brasileiro</option>
                        <option value="2011">Arabia | عربي</option>
                        <option value="2003">Tags</option>
                        <option value="2481">Polski Folk</option>
                        <option value="2809">Funk Rock</option>
                        <option value="2857">Power Pop</option>
                        <option value="2817">Art </option>
                        <option value="2968">Drone</option>
                        <option value="2864">Israeli Pop</option>
                        <option value="2811">Sing Along</option>
                        <option value="3434">Synthwave</option>
                        <option value="2872">Glitch Hop</option>
                        <option value="3497">UK Drill</option>
                        <option value="3507">Indie Monday</option>
                        <option value="3537">Surf</option>
                        <option value="2633">Cover</option>
                        <option value="3018">Fado</option>
                        <option value="3456">Puerto Rico</option>
                        <option value="3501">Chapter One</option>
                        <option value="477">Indie Pop</option>
                        <option value="1814">Strategy</option>
                        <option value="2942">Polynesia</option>
                        <option value="834">Grime</option>
                        <option value="1822">Genius Company Values</option>
                        <option value="1821">Lullaby</option>
                        <option value="3518">EDM</option>
                        <option value="3648">Singapore</option>
                        <option value="3614">Gujarati</option>
                        <option value="3618">Yodel</option>
                        <option value="2033">British Rock</option>
                        <option value="3">Fashion </option>
                        <option value="3136">Afro Trap</option>
                        <option value="1892">French Education</option>
                        <option value="1826">Norse Mythology</option>
                        <option value="2899">Chiptune</option>
                        <option value="1827">Bassline</option>
                        <option value="1894">Parody</option>
                        <option value="2359">Gothic Metal</option>
                        <option value="3177">Morocco | مغربي</option>
                        <option value="2477">Bluegrass</option>
                        <option value="3598">Underground Hip-Hop</option>
                        <option value="2476">Bachata</option>
                        <option value="2483">Doom Metal</option>
                        <option value="2468">Serbia</option>
                        <option value="2475">Bubblegum Pop</option>
                        <option value="3496">Chicago Drill</option>
                        <option value="2508">Salsa</option>
                        <option value="2491">Death Metal</option>
                        <option value="2093">Deutsche Spotlight</option>
                        <option value="2097">WBW</option>
                        <option value="2103">Quiz</option>
                        <option value="3031">Surf Punk</option>
                        <option value="3523">Genius Italia</option>
                        <option value="3612">Hip-Hop Tuga</option>
                        <option value="3483">Red Dirt</option>
                        <option value="2089">Soul Pop</option>
                        <option value="2094">Remix</option>
                        <option value="2104">Puzzle</option>
                        <option value="3132">Русский Ютуб (Russian YouTube)</option>
                        <option value="2643">Epic Poetry</option>
                        <option value="3559">Carimbó</option>
                        <option value="3482">Southern Rock</option>
                        <option value="2066">Polskie Disco Polo</option>
                        <option value="3515">România</option>
                        <option value="2067">Disco Polo</option>
                        <option value="2074">Classic Plays</option>
                        <option value="2065">Polski Pop</option>
                        <option value="2078">Gewinnspiel</option>
                        <option value="2174">Recenzje</option>
                        <option value="1838">Silent Film</option>
                        <option value="3532">Israeli Humor</option>
                        <option value="3531">Conspiracy Theory</option>
                        <option value="3557">Colombia</option>
                        <option value="1837">Monologue</option>
                        <option value="2589">Kultura W Rapie</option>
                        <option value="1839">Cartoon</option>
                        <option value="709">Россия (Russia)</option>
                        <option value="1844">Viral Videos</option>
                        <option value="352">R&amp;B Genius</option>
                        <option value="2113">Traditional</option>
                        <option value="1952">Play</option>
                        <option value="2117">Art Pop</option>
                        <option value="2592">Transcribers</option>
                        <option value="3538">Riddim</option>
                        <option value="1962">Opera</option>
                        <option value="2176">RBL Poland</option>
                        <option value="3101">Avant Garde</option>
                        <option value="3609">NBA</option>
                        <option value="1817">Japanese Literature</option>
                        <option value="1812">Charity</option>
                        <option value="607">Emo</option>
                        <option value="914">France</option>
                        <option value="2591">Deutsche Screen</option>
                        <option value="1863">Rastafarian</option>
                        <option value="2596">Czech Rap</option>
                        <option value="2693">Confessional Poetry</option>
                        <option value="2588">Schlager</option>
                        <option value="3455">Iranian Pop</option>
                        <option value="2594">StoPro Rap</option>
                        <option value="2692">Dab</option>
                        <option value="3520">Nintendocore</option>
                        <option value="1862">Ethiopia</option>
                        <option value="3495">Christian Rock</option>
                        <option value="2625">Bundesvision Song Contest</option>
                        <option value="2381">Experimental</option>
                        <option value="2382">Art Rock</option>
                        <option value="2384">Post-Hardcore</option>
                        <option value="1957">Rap Posters</option>
                        <option value="2397">Alternative Dance</option>
                        <option value="2386">Alternative Metal</option>
                        <option value="3636">Atlanta</option>
                        <option value="2390">Melodic Hardcore</option>
                        <option value="2394">Experimental Rock</option>
                        <option value="1312">Alternative Rock</option>
                        <option value="2396">Trip-Hop</option>
                        <option value="1867">Australia</option>
                        <option value="2395">IDM</option>
                        <option value="2200">Deutscher Pop</option>
                        <option value="3658">Latin Freestyle EDM</option>
                        <option value="2936">Zouk</option>
                        <option value="3560">Nepali</option>
                        <option value="3564">Kuwaiti Rap | راب كويتي</option>
                        <option value="3650">Desi Hip-Hop</option>
                        <option value="2076">Latin Freestyle</option>
                        <option value="3521">Post-Punk Revival</option>
                        <option value="2368">Electro House</option>
                        <option value="3365">Afroswing</option>
                        <option value="2214">Demo</option>
                        <option value="3625">Jazz Rap</option>
                        <option value="3626">Trapwave</option>
                        <option value="1930">Reggaeton</option>
                        <option value="1937">French R&amp;B</option>
                        <option value="1940">Norsk Rap</option>
                        <option value="1878">Native American</option>
                        <option value="2353">Progressive Metal</option>
                        <option value="2745">Blue-Eyed Soul</option>
                        <option value="3498">Folk Punk</option>
                        <option value="3657">Old Style Translation</option>
                        <option value="2462">Relacje</option>
                        <option value="2463">Polski Freestyle</option>
                        <option value="2744">Funk-Pop</option>
                        <option value="2668">Opinion</option>
                        <option value="3529">Georgian Folk</option>
                        <option value="3480">Post-Metal</option>
                        <option value="2671">Polska Polityka</option>
                        <option value="2180">Slang</option>
                        <option value="2182">Glossaries</option>
                        <option value="2785">Turkey</option>
                        <option value="2786">Türkçe Sözlü Rap</option>
                        <option value="2788">Dark Pop</option>
                        <option value="2789">Future Bass</option>
                        <option value="3630">Marabi</option>
                        <option value="3099">Industrial Rock</option>
                        <option value="3110">Israeli R&amp;B</option>
                        <option value="3655">Bay Area</option>
                        <option value="256">Cocktail</option>
                        <option value="1996">Eurovision</option>
                        <option value="1825">Scandinavia</option>
                        <option value="1868">Ireland</option>
                        <option value="2972">Electronicore</option>
                        <option value="3077">Irish Republicanism</option>
                        <option value="1981">Vietnam</option>
                        <option value="3486">As Gaeilge</option>
                        <option value="2970">Urdu</option>
                        <option value="3637">SuperWak Clique</option>
                        <option value="3454">Pagode Baiano</option>
                        <option value="3519">Irish Drill</option>
                        <option value="3641">IsiXhosa</option>
                        <option value="3640">IsiZulu</option>
                        <option value="3643">Sepedi</option>
                        <option value="2271">Fitness</option>
                        <option value="3540">License</option>
                        <option value="3639">Sesotho</option>
                        <option value="3638">Setswana</option>
                        <option value="2258">RRX Desant</option>
                        <option value="3642">Tshitsonga</option>
                        <option value="3651">UK Funky</option>
                        <option value="2304">Children's Literature</option>
                        <option value="3616">Stax</option>
                        <option value="1589">New Wave</option>
                        <option value="2022">Prose</option>
                        <option value="2310">French Country</option>
                        <option value="2023">Fanfiction</option>
                        <option value="2602">Polskie Seriale</option>
                        <option value="2599">Hyphy</option>
                        <option value="3275">Vocalese</option>
                        <option value="2806">Ambient</option>
                        <option value="2966">Québec</option>
                        <option value="3661">Cartel</option>
                        <option value="2807">Electro</option>
                        <option value="567">Rock Genius</option>
                        <option value="2967">Québec Rap</option>
                        <option value="3285">中文翻译 (Chinese Translation)</option>
                        <option value="3423">Punjabi</option>
                        <option value="2604">Buddhism</option>
                        <option value="2965">Post-Grunge</option>
                        <option value="3481">Sinogrime</option>
                        <option value="3422">Qawwali</option>
                        <option value="2600">Essay</option>
                        <option value="2975">Gnaoui قناوي</option>
                        <option value="2115">Adult Swim</option>
                        <option value="2993">Farsi Rap</option>
                        <option value="3032">Skate Punk</option>
                        <option value="2994">Iranian Rap</option>
                        <option value="3027">Stoner Rock</option>
                        <option value="3033">Garage Punk</option>
                        <option value="3045">American Underground</option>
                        <option value="3662">Sindicat</option>
                        <option value="3055">Mambo</option>
                        <option value="3043">Neo-Psychedelia</option>
                        <option value="3050">Contemporary Folk</option>
                        <option value="3058">Albania</option>
                        <option value="3479">Pop Country</option>
                        <option value="3473">Dirty South</option>
                        <option value="3048">Slowcore</option>
                        <option value="2963">Indie</option>
                        <option value="2903">Blackened Death Metal</option>
                        <option value="2904">Black 'N' Roll</option>
                        <option value="2865">Israeli Rock</option>
                        <option value="885">Musicals</option>
                        <option value="1303">Book Excerpt</option>
                        <option value="2645">NLNN</option>
                        <option value="3610">Creole</option>
                        <option value="2873">Nu Disco</option>
                        <option value="3656">Posse Cut</option>
                        <option value="2209">Polskie Prawo</option>
                        <option value="840">Alternative Pop</option>
                        <option value="1655">Drill</option>
                        <option value="2684">Русская литература (Russian Literature)</option>
                        <option value="29">Rant</option>
                        <option value="2238">Polska Muzyka</option>
                        <option value="3435">Merengue Típico</option>
                        <option value="3430">Q-Pop</option>
                        <option value="3663">Fandango</option>
                        <option value="500">Soul</option>
                        <option value="645">American Literature</option>
                        <option value="3442">Estonia</option>
                        <option value="1352">Moroccan Rap  | راب مغربي</option>
                        <option value="3431">Kachin</option>
                        <option value="501">Syria</option>
                        <option value="3428">Electronica</option>
                        <option value="510">Economics</option>
                        <option value="261">Producer</option>
                        <option value="462">Illuminati</option>
                        <option value="1078">Punk Rock</option>
                        <option value="285">Race / Ethnicity</option>
                        <option value="2882">Harsh Noise</option>
                        <option value="417">TED Talks</option>
                        <option value="287">Math (Education)</option>
                        <option value="399">Greek Mythology</option>
                        <option value="3444">Latin Urban</option>
                        <option value="3476">Hip-Hop</option>
                        <option value="3078">Jump Blues</option>
                        <option value="3509">Ranchera</option>
                        <option value="882">Ska</option>
                        <option value="2777">Psychedelic</option>
                        <option value="2883">Unreleased</option>
                        <option value="2646">Tropical House</option>
                        <option value="693">Bounce</option>
                        <option value="3150">War Metal</option>
                        <option value="1027">Beat Generation</option>
                        <option value="3146">Farsi</option>
                        <option value="1622">Electro-Soul</option>
                        <option value="903">Wrestling</option>
                        <option value="1055">Ragga</option>
                        <option value="3149">Brutal Death Metal</option>
                        <option value="1056">Afrobeat</option>
                        <option value="1105">Children's Music</option>
                        <option value="1289">French Rap</option>
                        <option value="3151">Bestial Black Metal</option>
                        <option value="2819">Vocaloid</option>
                        <option value="2724">Hip Hop-Hausarbeiten</option>
                        <option value="2700">J-Rock</option>
                        <option value="2697">Electro-Hop</option>
                        <option value="2726">Lyric Poetry</option>
                        <option value="2702">American Indian</option>
                        <option value="2733">Sertanejo</option>
                        <option value="2740">Psychedelic Rock</option>
                        <option value="2738">Harlem Renaissance</option>
                        <option value="2829">Japan</option>
                        <option value="2830">Chart History</option>
                        <option value="2838">Black Metal</option>
                        <option value="2843">Funeral Doom</option>
                        <option value="2853">LGBTQ+</option>
                        <option value="2859">Danmark</option>
                        <option value="2844">Folk Metal</option>
                        <option value="2826">Archive Initiative</option>
                        <option value="2822">Crossword</option>
                        <option value="2861">Glam Metal</option>
                        <option value="3037">Ska Punk</option>
                        <option value="2739">Physics</option>
                        <option value="1173">Disney</option>
                        <option value="16">Pop Genius</option>
                        <option value="1276">Gedichte</option>
                        <option value="2941">Lebanese Rap - راب لبناني</option>
                        <option value="1274">Polski Rock</option>
                        <option value="2950">Moçambique</option>
                        <option value="3611">Nasheed</option>
                        <option value="2951">Cabo Verde</option>
                        <option value="961">Girl Group</option>
                        <option value="2283">The Voice</option>
                        <option value="2842">Grindcore</option>
                        <option value="1688">Brasil</option>
                        <option value="2345">Promophase</option>
                        <option value="2004">Haiti</option>
                        <option value="2746">Red Hot Organization</option>
                        <option value="2237">Vlog</option>
                        <option value="918">Civil Rights</option>
                        <option value="1246">Vidéothèque</option>
                        <option value="1621">German Mythology</option>
                        <option value="1259">English Literature</option>
                        <option value="1209">French Rock</option>
                        <option value="2325">Album Oriented Rock (AOR)</option>
                        <option value="3627">Amapiano</option>
                        <option value="2317">Space</option>
                        <option value="1260">Short Story</option>
                        <option value="1508">Theme Song</option>
                        <option value="1888">Tracklist + Album Art</option>
                        <option value="2767">Lyrical Poetry</option>
                        <option value="2765">Kenya</option>
                        <option value="2324">Eighties</option>
                        <option value="1268">New Jack Swing</option>
                        <option value="2175">Aussie Hip-Hop</option>
                        <option value="2177">Canada</option>
                        <option value="3526">Kwaito</option>
                        <option value="2606">Gospel</option>
                        <option value="2781">Techno</option>
                        <option value="2780">Hymn</option>
                        <option value="1423">History</option>
                        <option value="1564">Menu</option>
                        <option value="1658">Deutschland</option>
                        <option value="2831">Hi-Nrg</option>
                        <option value="2832">World Music</option>
                        <option value="3628">Skhanda Rap</option>
                        <option value="23">Science </option>
                        <option value="151">Twitter</option>
                        <option value="2836">Folk Rock</option>
                        <option value="25">NSA</option>
                        <option value="3629">Motswako</option>
                        <option value="3066">Math Rock</option>
                        <option value="2837">Eurodance</option>
                        <option value="19">Modernism</option>
                        <option value="2674">K-Pop (케이팝)</option>
                        <option value="915">Government</option>
                        <option value="3485">Rhythm &amp; Grime</option>
                        <option value="249">Freestyle</option>
                        <option value="920">Dubstep</option>
                        <option value="1079">Blues</option>
                        <option value="1091">Satire</option>
                        <option value="1493">Metal</option>
                        <option value="2008">CollegeHipHop</option>
                        <option value="3632">Lesotho</option>
                        <option value="2415">African Languages</option>
                        <option value="2428">Holiday</option>
                        <option value="2860">Piano</option>
                        <option value="2874">Progressive House</option>
                        <option value="2420">Deutsche Geschichte</option>
                        <option value="2875">Happy Hardcore</option>
                        <option value="2877">Chillout</option>
                        <option value="1041">Swing</option>
                        <option value="2876">Hard Dance</option>
                        <option value="3028">Latin Trap</option>
                        <option value="3633">Botswana</option>
                        <option value="1760">Musique Classique</option>
                        <option value="18">Poetry</option>
                        <option value="2879">Bolero</option>
                        <option value="2362">Progressive Rock</option>
                        <option value="2498">Funk Nacional</option>
                        <option value="2881">Steampunk</option>
                        <option value="2893">Contemporary Era</option>
                        <option value="2892">Chants</option>
                        <option value="2886">Jazz Contrafact</option>
                        <option value="2586">En Español</option>
                        <option value="2887">Teen Pop</option>
                        <option value="2901">Oi!</option>
                        <option value="2885">Post-Bop</option>
                        <option value="2896">Celtic</option>
                        <option value="2905">Death-Doom</option>
                        <option value="2931">Cosmic American Music</option>
                        <option value="1666">Clash</option>
                        <option value="2891">Breakbeat</option>
                        <option value="2902">Bedroom Pop</option>
                        <option value="2930">Jazz Fusion</option>
                        <option value="3654">Hardcore</option>
                        <option value="2934">Xhosa Rap</option>
                        <option value="2929">Wizard Rock (Wrock)</option>
                        <option value="3120">Raga Rock</option>
                        <option value="2906">Deathgrind</option>
                        <option value="2833">Road Rap</option>
                        <option value="2907">Speed Metal</option>
                        <option value="2638">Portugal</option>
                        <option value="2960">Русский рэп (Russian Rap)</option>
                        <option value="2962">Русский поп (Russian Pop)</option>
                        <option value="3049">Americana</option>
                        <option value="3148">Metalrap</option>
                        <option value="3152">Powerviolence</option>
                        <option value="3155">Phonk</option>
                        <option value="3178">New Zealand</option>
                        <option value="3230">Русский трэп (Russian Trap)</option>
                        <option value="3233">Cumbia</option>
                        <option value="3179">Ritual Rap</option>
                        <option value="1445">Sneaker</option>
                        <option value="3484">DSBM (Depressive Suicidal Black Metal)</option>
                        <option value="3272">Israeli Children Songs</option>
                        <option value="2983">No Wave</option>
                        <option value="3158">Proto-Punk</option>
                        <option value="3268">Nederlandse Vertaling</option>
                        <option value="3234">ҚАЗАҚСТАНДЫҚ РЭП (KAZAKHSTANI RAP)</option>
                        <option value="3284">Bulgaria</option>
                        <option value="3270">Traduzione Italiana</option>
                        <option value="3192">Sea Shanty</option>
                        <option value="1520">French Meta</option>
                        <option value="3117">Bass Music</option>
                        <option value="197">Romanticism Literature</option>
                        <option value="1450">Screen</option>
                        <option value="1532">Dance</option>
                        <option value="2278">Trap</option>
                        <option value="2961">Русский рок (Russian Rock)</option>
                        <option value="411">Novel</option>
                        <option value="2661">VBT (Videobattleturnier)</option>
                        <option value="1605">Comics</option>
                        <option value="2796">Jamaica</option>
                        <option value="2868">Dystopian Literature</option>
                        <option value="2828">Neo Soul</option>
                        <option value="1615">Acoustic</option>
                        <option value="407">Science Fiction</option>
                        <option value="1897">Nederland</option>
                        <option value="2757">Alternative</option>
                        <option value="2758">Adult Alternative</option>
                        <option value="2605">Motown</option>
                        <option value="253">Politics</option>
                        <option value="2754">P-Funk</option>
                        <option value="2755">Booklet</option>
                        <option value="3664">Young Gang</option>
                        <option value="39">Literature</option>
                        <option value="198">Comedy</option>
                        <option value="3091">Norsk</option>
                        <option value="240">Baseball</option>
                        <option value="3093">Bossa Nova</option>
                        <option value="3096">Israeli Trap</option>
                        <option value="209">Food</option>
                        <option value="220">Speeches</option>
                        <option value="453">Christmas</option>
                        <option value="225">Military</option>
                        <option value="2976">Brit Pop</option>
                        <option value="3269">English Translation</option>
                        <option value="95">Polski Rap</option>
                        <option value="1054">Anime</option>
                        <option value="2908">Crossover Thrash</option>
                        <option value="605">Tattoo </option>
                        <option value="2913">Finnish Rock</option>
                        <option value="2916">Cloud Rap</option>
                        <option value="2915">Switzerland</option>
                        <option value="2923">Zimbabwe</option>
                        <option value="2909">Mistrzowie Podziemia</option>
                        <option value="2912">Japanese Rap</option>
                        <option value="2914">Suomi</option>
                        <option value="606">Electronic</option>
                        <option value="2289">Synth-Pop</option>
                        <option value="3228">Tango</option>
                        <option value="3226">Iceland</option>
                        <option value="2884">Vaporwave</option>
                        <option value="756">Contemporary Poetry</option>
                        <option value="1600">Algerian Rap | راب جزائري</option>
                        <option value="3502">Reparterismo</option>
                        <option value="778">French Literature</option>
                        <option value="832">Bitcoin</option>
                        <option value="964">Pop-Rock</option>
                        <option value="891">Business</option>
                        <option value="3095">Gabber</option>
                        <option value="1437">Net Neutrality</option>
                        <option value="2964">Lo-Fi</option>
                        <option value="182">Guide</option>
                        <option value="172">Google</option>
                        <option value="2977">Israeli Hip-Hop</option>
                        <option value="191">Middle East</option>
                        <option value="189">Israel</option>
                        <option value="193">Automotive</option>
                        <option value="190">Palestine</option>
                        <option value="2988">Hard Bass</option>
                        <option value="2979">Glitch</option>
                        <option value="2984">Balkan Rap</option>
                        <option value="2990">Hard House</option>
                        <option value="2991">Persian</option>
                        <option value="2987">Texas Swing</option>
                        <option value="2992">Iran</option>
                        <option value="2981">Magyar</option>
                        <option value="2985">Serbian Rap</option>
                        <option value="2986">Croatian Rap</option>
                        <option value="6">Letter</option>
                        <option value="2995">Instrumental Hip-Hop</option>
                        <option value="3008">Roots</option>
                        <option value="911">Instrumental</option>
                        <option value="10">Health</option>
                        <option value="910">Bebop</option>
                        <option value="3009">Chicago Blues</option>
                        <option value="1669">Deutsche Literatur</option>
                        <option value="1050">Nerdcore</option>
                        <option value="3010">Electric Blues</option>
                        <option value="35">Religion</option>
                        <option value="3013">Protest Songs</option>
                        <option value="3011">Anti-Folk</option>
                        <option value="3014">American Folk</option>
                        <option value="3137">Neue Deutsche Härte</option>
                        <option value="3012">Retro</option>
                        <option value="43">Bridge Wars</option>
                        <option value="1272">Nachrichten</option>
                        <option value="290">Live</option>
                        <option value="141">Education</option>
                        <option value="305">Spoken Word</option>
                        <option value="3019">Mashup</option>
                        <option value="3026">Downtempo</option>
                        <option value="3436">Cameroonian Rap</option>
                        <option value="3035">Heartland Rock</option>
                        <option value="3036">Alternative Country</option>
                        <option value="3041">Singer-Songwriter</option>
                        <option value="3042">Space Rock</option>
                        <option value="3052">New Orleans R&amp;B</option>
                        <option value="3051">British Folk</option>
                        <option value="424">Italy</option>
                        <option value="1457">MMA</option>
                        <option value="617">Deutscher Rock</option>
                        <option value="1496">Live Blog</option>
                        <option value="981">Olympics</option>
                        <option value="650">Contest</option>
                        <option value="990">Hockey</option>
                        <option value="1318">Iraq</option>
                        <option value="664">List</option>
                        <option value="677">Socialism</option>
                        <option value="696">Photography</option>
                        <option value="1316">Heraldry</option>
                        <option value="675">Novella</option>
                        <option value="3102">Avant Garde Metal</option>
                        <option value="3104">Brutal Horrorcore</option>
                        <option value="798">West Coast</option>
                        <option value="1577">Alchemy</option>
                        <option value="3105">Israeli Yam Tichoni</option>
                        <option value="3109">Flamenco</option>
                        <option value="1606">DC Universe</option>
                        <option value="1593">Disco</option>
                        <option value="1619">Dancehall</option>
                        <option value="3161">Rapcore</option>
                        <option value="3163">Türkiye</option>
                        <option value="3165">Dark Wave</option>
                        <option value="3164">Беларусь (Belarus)</option>
                        <option value="3162">Discography</option>
                        <option value="1277">Polska Poezja</option>
                        <option value="948">Achievement Guide</option>
                        <option value="952">A Cappella</option>
                        <option value="940">Latin Pop</option>
                        <option value="1275">Polskie Wiadomości</option>
                        <option value="3558">Afrobeats</option>
                        <option value="17">Deutscher Rap</option>
                        <option value="1602">Palestinian Rap - راب فلسطيني</option>
                        <option value="1519">French Reggae</option>
                        <option value="3288">Ringtone</option>
                        <option value="3415">Japanese</option>
                        <option value="3292">Underground Soul</option>
                        <option value="1612">Egyptian Rap - راب مصري</option>
                        <option value="413">Country Genius</option>
                        <option value="1420">Philosophy</option>
                        <option value="3417">Volksmusik</option>
                        <option value="3418">Bashkir Rap</option>
                        <option value="786">Tech</option>
                        <option value="3414">Romansh</option>
                        <option value="3416">Israeli Punk</option>
                        <option value="3668">Marathi</option>
                        <option value="1448">Dream-Pop</option>
                        <option value="1443">Crunk</option>
                        <option value="1426">Interview</option>
                        <option value="1051">Dub</option>
                        <option value="1433">Beef</option>
                        <option value="1451">News </option>
                        <option value="1453">House</option>
                        <option value="1474">Svensk Rap</option>
                        <option value="1525">Boy Band</option>
                        <option value="499">Gaming</option>
                        <option value="702">Elections</option>
                        <option value="1183">Code</option>
                        <option value="611">Review</option>
                        <option value="1071">Україна (Ukraine)</option>
                        <option value="1492">Grunge</option>
                        <option value="1709">Movie Preview</option>
                        <option value="1601">Tunisian Rap - راب تونسي</option>
                        <option value="1673">Ragtime</option>
                        <option value="1185">French News</option>
                        <option value="1585">Toy</option>
                        <option value="1674">Psychobilly</option>
                        <option value="2411">Shoegaze</option>
                        <option value="1761">Hindi Poetry</option>
                        <option value="2366">Melodic Death Metal</option>
                        <option value="2383">Noise Rock</option>
                        <option value="1545">Autobiography</option>
                        <option value="1672">Dark Cabaret</option>
                        <option value="1415">Sports </option>
                        <option value="1676">UK Rap</option>
                        <option value="1546">Biography</option>
                        <option value="1567">Chess</option>
                        <option value="1617">Screenplay</option>
                        <option value="1506">Indie Rock</option>
                        <option value="1623">UK</option>
                        <option value="1618">33 1/3 Series</option>
                        <option value="1569">A3C</option>
                        <option value="1626">Soviet Union</option>
                        <option value="1693">Power Metal</option>
                        <option value="1730">Conscious Hip-Hop</option>
                        <option value="1699">Podcast</option>
                        <option value="1801">Basketball</option>
                        <option value="1645">Fantasy (Lit)</option>
                        <option value="1865">Israeli Rap</option>
                        <option value="1758">Medieval Text</option>
                        <option value="1695">Nu Rave</option>
                        <option value="1692">Afghanistan</option>
                        <option value="3297">Dark Ambient</option>
                        <option value="3356">Freak Folk</option>
                        <option value="3302">Axé</option>
                        <option value="3299">Türkçe Çeviri</option>
                        <option value="3360">Hardcore Metalcore</option>
                        <option value="3353">Tamazight</option>
                        <option value="3357">Balada</option>
                        <option value="3359">Extreme Metal</option>
                        <option value="3320">Myanmar</option>
                        <option value="3371">Bengali</option>
                        <option value="3361">Math Metal</option>
                        <option value="3318">New Age</option>
                        <option value="3363">Progressive Death Metal</option>
                        <option value="3364">Screamo</option>
                        <option value="3367">Playlist</option>
                        <option value="3372">Dominican Republic</option>
                        <option value="3358">Nu-Jazz</option>
                        <option value="3300">Nigerian Rap</option>
                        <option value="3301">Experimental Folk</option>
                        <option value="3355">Experimental Pop</option>
                        <option value="3362">Mathcore</option>
                        <option value="3370">Indian</option>
                        <option value="3379">Hindi</option>
                        <option value="3373">Symphonic Power Metal</option>
                        <option value="3375">Sverige</option>
                        <option value="3412">Emo Rap</option>
                        <option value="2052">Christian</option>
                        <option value="3378">Chaâbi Algérien | شعبي جزائري</option>
                        <option value="3366">Israeli Metal</option>
                        <option value="3374">Trancecore</option>
                        <option value="1750">Funk</option>
                        <option value="1594">Arabic Literature | أدب عربي</option>
                        <option value="65">Football (Soccer)</option>
                        <option value="1757">Classical Music</option>
                        <option value="1747">Sonnet</option>
                        <option value="1580">Cypher</option>
                        <option value="2358">Symphonic Metal</option>
                        <option value="1778">Occult</option>
                        <option value="1788">Graffiti</option>
                        <option value="1790">China</option>
                        <option value="1767">Memorial</option>
                        <option value="1797">Marvel</option>
                        <option value="1793">Filmographie</option>
                        <option value="3073">Outlaw Country</option>
                        <option value="3046">College Rock</option>
                        <option value="3115">Italian Rap</option>
                        <option value="3071">Neofolk</option>
                        <option value="3047">Noise Pop</option>
                        <option value="3114">Orchestral</option>
                        <option value="775">Feminism</option>
                        <option value="802">Arabic Rap | راب عربي</option>
                        <option value="788">Dipset</option>
                        <option value="3159">Krautrock</option>
                        <option value="3168">Go-Go</option>
                        <option value="3160">México</option>
                        <option value="3172">Soul Jazz</option>
                        <option value="3276">Israeli Grunge</option>
                        <option value="3191">Русский баттл-рэп (Russian Battle Rap)</option>
                        <option value="3175">België/Belgique</option>
                        <option value="3170">Big Band</option>
                        <option value="3187">Chillhop</option>
                        <option value="3169">Swing Jazz</option>
                        <option value="3171">Hardcore Hip-Hop</option>
                        <option value="3173">Jazz-Funk</option>
                        <option value="3176">Русский грайм (Russian Grime)</option>
                        <option value="3174">French Pop</option>
                        <option value="3225">Қазақстан (Kazakhstan)</option>
                        <option value="3190">Battle Rap</option>
                        <option value="3279">Traditional Folk</option>
                        <option value="3280">Chill</option>
                        <option value="3274">Русский перевод (Russian Translation)</option>
                        <option value="3186">Atmospheric Sludge Metal</option>
                        <option value="3281">Karneval</option>
                        <option value="3185">Atmospheric Black Metal</option>
                        <option value="1498">TV</option>
                        <option value="2354">Electronic Rock</option>
                        <option value="2349">Space Opera</option>
                        <option value="2355">Deathcore</option>
                        <option value="2356">Heavy Metal</option>
                        <option value="2357">Hard Rock</option>
                        <option value="2348">Polskie Filmy</option>
                        <option value="72">Electro-Pop</option>
                        <option value="73">Ballad</option>
                        <option value="111">Liner Notes</option>
                        <option value="3309">Filipino</option>
                        <option value="3305">Pagode</option>
                        <option value="3317">Future House</option>
                        <option value="3304">Forró</option>
                        <option value="3303">Brega</option>
                        <option value="3316">Viking Metal</option>
                        <option value="3311">Boom Bap</option>
                        <option value="3313">Spotify Singles</option>
                        <option value="3314">Electronic Trap</option>
                        <option value="3315">Dembow</option>
                        <option value="593">Year End List</option>
                        <option value="608">Pop-Punk</option>
                        <option value="2894">Angola</option>
                        <option value="2895">Österreich</option>
                        <option value="1366">Deep House</option>
                        <option value="1375">Drum &amp; Bass</option>
                        <option value="1360">G-Funk</option>
                        <option value="1379">Norge</option>
                        <option value="1367">Netflix</option>
                        <option value="1401">Jungle</option>
                        <option value="1397">Résumé</option>
                        <option value="1409">Football (American)</option>
                        <option value="1452">Non-Music</option>
                        <option value="1472">Korean</option>
                        <option value="1537">Nation Of Islam</option>
                        <option value="1538">Chemistry</option>
                        <option value="1678">Polska Historia</option>
                        <option value="1785">Conspiracy</option>
                        <option value="1787">Anthropology</option>
                        <option value="1449">Meta</option>
                    </select>
                    </div>
                  </div>
                </div>
                <hr/>
                <input className="submit" type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
     
    )
  }

}