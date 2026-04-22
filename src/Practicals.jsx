import React, { useState } from "react";

const practicalsData = [
  {
    title: "PRACTICAL 1",
    aim: "",
    code: `Part A: FTK (Windows)
click on the file -> create disk image -> select pendrive -> raw(dd)

------Kali Linux---------
Part B: Guymager
sudo apt install guymager
sudo guymager
right click pendrive name -> Acquire Image

Part C: dd command line
sudo df -h
sudo dd if=/dev/sdb1 of=./Desktop/pendrive_image`,
  },
  {
    title: "Practical 2",
    aim: "",
    code: `Using scalpel (C) --- kali Linux ---

sudo nano /etc/scalpel/scalpel.conf
uncomment the filetype ex.jpg,png,etc (file ext. that needs to be recoverd)

Craving the data → scalpel -c /etc/scalpel/scalpel.conf -o cid pendrive.001      (pendrive is the file that that needs to be recoverd)

ll  -> for summery
cat audit.txt (this file will be created when we run the ll command)`,
  },
  {
    title: "Practical 3",
    aim: "",
    code: `for this practical you need to download/find Sleuth Kit and go to
\\CF\\sleuthkit-4.14.0-win32\\bin -> open cmd in this dir

the file path of this file "Windows_Evidence_SSD_TD.dd" 

fsstat -f ntfs {file_path}
Using Istat

istat -f ntfs {file_path} 0
istat -f ntfs {file_path} 1
istat -f ntfs {file_path} 2
istat -f ntfs {file_path} 3
istat -f ntfs {file_path} 4`,
  },
  {
    title: "Practical 4",
    aim: "",
    code: `open ftk imager -> file -> obtain protected file
give the destination file path
select password recovery and all registry files option

now open autopsy
during setup (select data source stage) select the logical files
in data source add the path of the folder created using ftk

open the LogicalFileSet
inside users click on the admin user or other
once clicked -> NTUSER.DAT file below dropdown will appear
navigate to this filepath
ROOT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\UserAssist
cheack files inside the userassit folde and cheak for non zero values in count
click on count and copy any string value 
go to https://rot13.com/ and paste the copied string`,
  },
  {
    title: "Practical 5",
    aim: "",
    code: `windows ----
1.wireshark -> traffic.pcapng
search http -> post req -> HTML form URL -> form id pass

           --> DNS remote Shell.pcap
tcp.port == 53
select any tcp packet -> right click -> follow tcp stream
remote shell has been established
	   ---> DNS remote shell.pcap
in the top dropdown you will see the reports 


TCPDump part C (Kali linux)

tcpdump -i eth0 -w ./Desktop/prac5.pcap   {file path of your own}
open new terminal and ping 8.8.8.8  
then ctl+c both terminals 
then cat --> tcpdump -r ./Desktop/prac5.pcap`,
  },
  {
    title: "Practical 6 (CSI LINUX MACHINE)",
    aim: "",
    code: `Part A -> 
cd /home/csi/Desktop/memdump/volatility/
python2 vol.py imageinfo -f memdump.mem

Part B ->
capture the packet use ftk imager
open -> file -> capture memory -> browse -> desktop -> capture

part C -> (windows software)
Open Redline → Collect Data (create a standard collector) → Browse → new folder → OK
Go to File explorer → go to path → RunRedlineAudit run as administrator
Session folder is created → open AnalysisSession1 →
Select 2nd option → (I am investigating ...)
report will be presented/displayed.`,
  },
  {
    title: "Practical 7 (Kali Linux)",
    aim: "",
    code: `cd ~/mailMeta
python3 meta.py -f Normal\\ Email\\ Message.eml
(hit tab for autocomplete after normal)

python3 meta.py -f Suspicious\\ Email\\ Message.eml`,
  },
  {
    title: "Practical 8",
    aim: "",
    code: `part A  -->
browser history examiner

Go to start → Browser History Examiner → Capture History → Select “Capture from thiscomputer” → Next
Make new folder → Click Capture

part B  -->
Chrome Cache Viewer`,
  },
  {
    title: "Practical 9",
    aim: "",
    code: `A -> download TestDisk.win (run as admins...)
once executed -> select create 
select the pendrive
select the intel 
select advanced
select partition -> undelete option

Select any file → Shift + c → use arrow key to select and change directory →Enter →press c again to paste

B -> photoRec

execute the exe and select the pendrive
select fat32
select other

C -> Recuva
welcome screen -> next -> all files
Press Cancel for next popup → now select your Pendrive from dropdown → Click Options → Actions → OK → Now start Scan`,
  },
];

export default function Practicals() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedId(idx);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "30px", color: "#333333" }}
      >
        CF Practicals
      </h1>

      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <button
          onClick={() => window.open("/san.pdf", "_blank")}
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: "pointer",
            background: "#0056b3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#003d82")}
          onMouseOut={(e) => (e.target.style.background = "#0056b3")}
        >
          📄 Open Reference PDF
        </button>
      </div>

      {practicalsData.map((prac, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
            background: "#f9f9f9",
          }}
        >
          <h2 style={{ marginTop: 0, color: "#0056b3" }}>{prac.title}</h2>
          {prac.aim && (
            <p style={{ color: "#555" }}>
              <strong style={{ color: "#333" }}>Aim:</strong> {prac.aim}
            </p>
          )}
          <div style={{ position: "relative", marginTop: "15px" }}>
            <button
              onClick={() => handleCopy(prac.code, idx)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "6px 12px",
                cursor: "pointer",
                background: copiedId === idx ? "#28a745" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
            >
              {copiedId === idx ? "Copied!" : "Copy"}
            </button>
            <pre
              style={{
                background: "#ffffff",
                color: "#333333",
                padding: "15px",
                borderRadius: "6px",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                fontFamily: "monospace",
                paddingTop: "40px",
                border: "1px solid #ddd",
              }}
            >
              <code>{prac.code}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
