/****************************************************************************
**					SAKARYA ÜNİVERSİTESİ
**				BİLGİSAYAR VE BİLİŞİM BİLİMLERİ FAKÜLTESİ
**				    BİLGİSAYAR MÜHENDİSLİĞİ BÖLÜMÜ
**				   NESNEYE DAYALI PROGRAMLAMA DERSİ
**					2023-2024 BAHAR DÖNEMİ
**	
**				ÖDEV NUMARASI: 3:
**				ÖĞRENCİ ADI : Ramazan Bıyık:
**				ÖĞRENCİ NUMARASI : G231210088:
**                         DERSİN ALINDIĞI GRUP : A
****************************************************************************/

using System.ComponentModel;
namespace Kuafor_Salonu_Yönetim_projesi
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private bool PersonelAyniSaateRandevusuVar(string personelAd, string saat)
        {
            foreach (var randevu in list)
            {
                if (randevu.PersonelAd == personelAd && randevu.Saat == saat)
                {
                    return true;
                }
            }
            return false;
        }
        BindingList<RandevuClass> list = new BindingList<RandevuClass>();

        Dictionary<string, double> islem = new Dictionary<string, double>
        {
            {"Fön : 400TL", 400 },
            {"Kesim : 1100", 1100 },
            {"Topuz : 1250", 1250 },
            {"Maşa : 850", 850 },
            {"Dip Boya : 1100", 1100 },
            {"Boya Değişimi : 4500", 4500 },
            {"Röfle : 4000", 4000 },
            {"Kırma : 1750", 1750 },
            {"Cila : 1100", 1100 },
            {"Ombre : 3500", 3500 },
            {"Koruyucu Bakım :1850", 1850 },
            {"Sombre : 3500", 3500 },
            {"Defrize : 4000", 4000 },
            {"Pigmetasyon :1750", 1750 },
            {"Kreatin Bakım : 1500", 1500 },
            {"Perma : 3500", 3500 },
            {"Komple Boya : 2250", 2250 },
        };
        Dictionary<string, double> saat = new Dictionary<string, double> {
            {"10.30",10.30},
            {"11.00",11.00},
            {"11.30",11.30},
            {"12.00",12.00},
            {"12.30",12.30},
            {"13.00",13.00},
            {"13.30",13.30},
            {"14.00",14.00},
            {"14.30",14.30},
            {"15.00",15.30},
            {"15.30",15.30},
            {"16.00",16.30},
            {"16.30",16.30},
            {"17.00",17.30},
            {"17.30",17.30},
            {"18.00",18.30},
            {"18.30",18.30},
            {"19.00",19.00},

        };

        Dictionary<string, double> personelAd = new Dictionary<string, double>
        {
            {"Nazim",1 },
            {"Sefa",2 },
            {"Osman",3 },
            {"Katrane",4 },
            {"Enes",5 },

        };

        private void Form1_Load(object sender, EventArgs e)
        {
            comboBox1.DisplayMember = "Key";
            comboBox1.ValueMember = "Value";
            comboBox1.DataSource = new BindingSource(islem, null);
            comboBox2.DisplayMember = "Key";
            comboBox2.ValueMember = "Value";
            comboBox2.DataSource = new BindingSource(saat, null);
            comboBox3.DisplayMember = "Key";
            comboBox3.ValueMember = "Value";
            comboBox3.DataSource = new BindingSource(personelAd, null);

            list.Add(new RandevuClass(1, "Ramazan Katran", "5426282009", "10.30", "Komple Boya", "Nazim"));
            list.Add(new RandevuClass(1, "Büşra Yılmaz", "5385462156", "11.30", "Perma", "Sefa"));
            list.Add(new RandevuClass(1, "Aysu Kurt", "5426281564", "12.00", "Kreatin Bakım", "Osman"));
            list.Add(new RandevuClass(1, "Meril Yılmaz", "5426282079", "13.00", "Defrize", "Katrane"));
            list.Add(new RandevuClass(1, "Tuğba Alakuş", "5426289432", "14.00", "Pigmetasyon", "Enes"));
            dataGridView1.DataSource = list.ToList();
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                textBox1.Text = dataGridView1.CurrentRow.Cells["ad"].Value.ToString();
                textBox2.Text = dataGridView1.CurrentRow.Cells["telefon"].Value.ToString();
                textBox3.Text = dataGridView1.CurrentRow.Cells["sira"].Value.ToString();
                comboBox1.Text = dataGridView1.CurrentRow.Cells["islem"].Value.ToString();
                comboBox2.Text = dataGridView1.CurrentRow.Cells["saat"].Value.ToString();

            }
            catch (Exception)
            {
                throw;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string ad = textBox1.Text;
            string telefon = textBox2.Text;
            int sira = Convert.ToInt32(textBox3.Text);
            string saat = comboBox2.Text;
            string islem = comboBox1.Text;
            string personelAd = comboBox3.Text;

            if (PersonelAyniSaateRandevusuVar(personelAd, saat))
            {
                MessageBox.Show("Seçilen personelin aynı saatte başka bir randevusu var.");
                return;
            }

            RandevuClass randevu = new RandevuClass(sira, ad, telefon, saat, islem, personelAd);

            list.Add(randevu);
            dataGridView1.DataSource = list.ToList();

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (comboBox1.SelectedValue != null)
            {
                label6.Text = comboBox1.SelectedValue.ToString();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (dataGridView1.SelectedRows.Count > 0)
            {
                DataGridViewRow selectedrow = dataGridView1.SelectedRows[0];
                RandevuClass secilenRandevu = selectedrow.DataBoundItem as RandevuClass;

                if (secilenRandevu != null)
                {
                    if (list.Contains(secilenRandevu))
                    {
                        list.Remove(secilenRandevu);
                    }
                }
            }
            dataGridView1.DataSource = list.ToList();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            DataGridViewRow selectedrow = dataGridView1.SelectedRows[0];
            RandevuClass secilenRandevu = selectedrow.DataBoundItem as RandevuClass;

            if (secilenRandevu != null)
            {
                string ad = textBox1.Text;
                string telefon = textBox2.Text;
                int sira = Convert.ToInt32(textBox3.Text);
                string saat = comboBox2.Text;
                string islem = comboBox1.Text;
                string personelAd = comboBox3.Text;

                if (secilenRandevu.PersonelAd != personelAd || secilenRandevu.Saat != saat)
                {
                    if (PersonelAyniSaateRandevusuVar(personelAd, saat))
                    {
                        MessageBox.Show("Seçilen personelin aynı saatte başka bir randevusu var.");
                        return;
                    }
                }


                secilenRandevu.Ad = ad;
                secilenRandevu.Telefon = telefon;
                secilenRandevu.Sira = sira;
                secilenRandevu.Saat = saat;
                secilenRandevu.Islem = islem;
                secilenRandevu.PersonelAd = personelAd;

                dataGridView1.DataSource = null;
                dataGridView1.DataSource = list;
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Cursor.Current = Cursors.WaitCursor;
            SaveFileDialog sf = new SaveFileDialog();
            sf.Filter = "txt dosyası|0.txt";
            sf.FileName = "Data Base";

            if (dataGridView1.Rows.Count > 0)
            {
                if (sf.ShowDialog() == DialogResult.OK)
                {
                    FileStream fs = new FileStream(sf.FileName, FileMode.OpenOrCreate, FileAccess.Write);
                    fs.Close();
                    for (int i = 0; i < dataGridView1.Rows.Count; i++)
                    {
                        string sira = dataGridView1.Rows[i].Cells["Sira"].Value.ToString();
                        string ad = dataGridView1.Rows[i].Cells["Ad"].Value.ToString();
                        string telefon = dataGridView1.Rows[i].Cells["Telefon"].Value.ToString();
                        string saat = dataGridView1.Rows[i].Cells["Saat"].Value.ToString();
                        string islem = dataGridView1.Rows[i].Cells["Islem"].Value.ToString();
                        string personelAd = dataGridView1.Rows[i].Cells["PersonelAd"].Value.ToString();


                        string icerik = ad + " : " + telefon + " : " + sira + " : " + saat + " : " + islem + " :" + personelAd;

                        string[] existingLines = File.ReadAllLines(sf.FileName);
                        bool alreadyExists = existingLines.Any(line => line.Contains(icerik));

                        // Eğer aynı veri dosyada yoksa dosyaya ekleme yapın
                        if (!alreadyExists)
                        {
                            File.AppendAllText(sf.FileName, icerik + Environment.NewLine);
                        }


                    }


                }
            }
            else
            {
                MessageBox.Show("Kaydedilecek veri bulunmamaktadir.");
            }
            Cursor.Current = Cursors.Default;
        }

        private void label7_Click(object sender, EventArgs e)
        {

        }
    }
}
