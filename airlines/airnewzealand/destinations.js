var destinations = ["Adelaide (ADL)","Apia (APW)","Auckland (AKL)","Brisbane (BNE)","Cairns (CNS)","Christchurch (CHC)","Denpasar Bali (DPS)","Dunedin (DUD)","Ezeiza (EZE)","Gold Coast, QL (OOL)","Hong Kong (HKG)","Honolulu (HNL)","Houston (IAH)","Invercargill (IVC)","Kansai (KIX)","London Heathrow (LHR)","Los Angeles (LAX)","Melbourne (MEL)","Nadi (NAN)","Niue Island (IUE)","Norfolk Island (NLK)","Noumea (NOU)","Nuku&#39;Alofa (TBU)","Papeete (PPT)","Perth (PER)","Port Vila (VLI)","Queenstown (ZQN)","Rarotonga (RAR)","Rockhampton (ROK)","Rotorua (ROT)","San Francisco (SFO)","Shanghai Pudong (PVG)","Singapore (SIN)","Sunshine Coast (MCY)","Sydney (SYD)","Tokyo Narita (NRT)","Vancouver (YVR)","Wellington (WLG)"]; 

// this function transforms the destination string in to the 3 letter code
function makeDes (str) {
	 return str.match(/[A-Z][A-Z][A-Z]/g)[0];
}

exports.destinations = destinations;
exports.makeDes = makeDes;
