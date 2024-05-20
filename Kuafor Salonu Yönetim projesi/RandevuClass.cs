using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;

namespace Kuafor_Salonu_Yönetim_projesi
{
    class RandevuClass
    {
        string ad;
        string telefon;
        int sira;
        string saat;
        string islem;
        string personelAd;

        public string Ad { get => ad; set => ad = value; }
        public string Telefon { get => telefon; set => telefon = value; }
        public int Sira { get => sira; set => sira = value; }
        public string Saat { get => saat; set => saat = value; }
        public string Islem { get => islem; set => islem = value; }
        public string PersonelAd { get => personelAd; set => personelAd = value; }

        public RandevuClass(int sira, string ad, string telefon,string saat, string islem, string personelAd)
        {
            this.sira = sira;
            this.ad = ad;
            this.telefon = telefon;
            this.saat = saat;
            this.islem = islem;
            this.personelAd = personelAd;
            
        }


        public class ComboBoxItem {
            public string Text {  get; set; }
            public string Value { get; set; }

            public ComboBoxItem(string text, string value) {
                Text = text;
                Value = value;
            }

            public override string ToString()
            {
                return Text;
            }
        
        }
    }
}
