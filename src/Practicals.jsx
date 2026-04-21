import React, { useState } from "react";

const practicalsData = [
  {
    title: "Practical No.10",
    aim: "Demonstrate Conversion of Data into a Universal Format.",
    code: `Part 1: Normalize Timestamps in a Log Files.
cd /home/analyst/lab.support.files/
ls –l
[analyst@secOps lab.support.files]$awk 'BEGIN {FS=OFS="|"} {$3=strftime("%c",$3)} {print}' applicationX_in_epoch.log 
[analyst@secOps lab.support.files]$ nano applicationX_in_epoch.log 
[analyst@secOps lab.support.files]$ awk 'BEGIN {FS=OFS="|"} {$3=strftime("%c",$3)} {print}' applicationX_in_epoch.log > applicationX_in_human.log 
[analyst@secOps lab.support.files]$ cat applicationX_in_human.log

Part 2: Normalize Timestamps in an Apache Log File 
[analyst@secOps lab.support.files]$ cat apache_in_epoch.log 
[analyst@secOps lab.support.files]$ awk 'BEGIN {FS=OFS=" "} {$4=strftime("%c",$4)} {print}' apache_in_epoch.log 
[analyst@secOps lab.support.files]$ awk 'BEGIN {FS=OFS=" "} {gsub(/[|]/,"",$4)}{print}{$4=strftime("%c",$4)}{print}' apache_in_epoch.log`,
  },
  {
    title: "Practical No: 9",
    aim: "Install and Configure GrayLog on Linux",
    code: `Part 1: Install Java and Els
sudo nano /etc/elasticsearch/elasticsearch.yml
action.auto_create_index: false
sudo systemctl daemon-reload
sudo systemctl start elasticsearch
sudo systemctl enable elasticsearch 
curl -X GET http://localhost:9200

Part 2: Install MongoDB
sudo apt update
sudo apt install -y mongodb-server
sudo systemctl start mongodb
sudo systemctl enable mongodb

Part 4: Install GrayLog Server 
wget https://packages.graylog2.org/repo/packages/graylog-4.2-repository_latest.deb
sudo dpkg -i graylog-3.3-repository_latest.deb
sudo apt update
sudo apt install -y graylog-server
pwgen -N 1 -s 96
sudo gedit /etc/graylog/server/server.conf 
sudo nano /etc/graylog/server/server.conf 
echo -n password | sha256sum
sudo nano /etc/graylog/server/server.conf

Part 5: Setup Graylog web interface 
sudo gedit /etc/graylog/server/server.conf
Put http_bind_address = 192.168.0.10:9000 http_external_uri = http://public_ip:9000/ 
sudo systemctl daemon-reload
sudo systemctl start graylog-server
sudo systemctl enable graylog-server
sudo tail -f /var/log/graylog-server/server.log

Access Graylog 
http://ip.add.re.ss:9000 type in browser.`,
  },
  {
    title: "Practical No.8",
    aim: "Install and Configure ELK on Linux.",
    code: `Part 1: Installing java
sudo apt update
sudo apt install default-jre
java -version

Part 2: Install and Configure the Elasticsearch
curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo  "deb https://artifacts.elastic.co/packages/7.x/apt stable  main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt update
sudo apt install elasticsearch
sudo nano /etc/elasticsearch/elasticsearch.yml (Uncomment network.host:localhost http.port:9200)
sudo systemctl start elasticsearch 
curl -X GET "localhost:9200"`,
  },
  {
    title: "Practical No.7",
    aim: "Install and Run Splunk on Linux.",
    code: `cd Desktop
sudo /opt/splunk/bin/splunk enable boot-start 
(if this gives error then run dpkg command)
sudo dpkg -i splunk-7.1.1-8f0ead9ec3db-linux-2.6-amd64.deb

sudo /opt/splunk/bin/splunk enable boot-start
y
sudo service splunk start
sudo service splunk status

Splunk will be started at port 8000. You can access the application via URL http://localhost:8000/. To logged in into the app enter username as "admin" then enter your password. In my case the password is "admin!123"`,
  },
  {
    title: "Practical No.6",
    aim: "Configure your Linux system to send syslog messages to a syslog server and Read them.",
    code: `Kali Linux
sudo apt-get update
sudo apt-get install rsyslog
sudo nano /etc/rsyslog.conf

first ubuntu ip then kali ip 
@192.168.137.50:514 
*.* @@192.168.137.50:514
$ActionQueueFileName queue 
$ActionQueueMaxDiskSpace 1g 
$ActionQueueSaveOnShutdown on 
$ActionQueueType LinkedList 
$ActionResumeRetryCount -1 

Then Save and exit the file 

Ubuntu Linux
sudo systemctl restart rsyslog
ls /var/log/
sudo tail -f /var/log/kali/rsyslogd.log`,
  },
  {
    title: "Practical No 5",
    aim: "Create your own syslog Server",
    code: `All Ubuntu
sudo systemctl status rsyslog 
sudo apt-get update 
sudo apt-get install rsyslog 
sudo nano /etc/rsyslog.conf
(uncomment udp tcp lines)
$template remote-incoming-logs,"/var/log/%HOSTNAME%/%PROGRAMNAME%.log" 
*.* ?remote-incoming-logs
sudo systemctl restart rsyslog
ss -tunelp | grep 514 
sudo ufw allow 514/tcp 
sudo ufw allow 514/udp 
sudo rsyslogd -N1 -f /etc/rsyslog.conf`,
  },
  {
    title: "Practical No.4",
    aim: "nslookup",
    code: `nslookup
www.cisco.com`,
  },
  {
    title: "Practical No.2",
    aim: "Demonstrate the use of Snort and Firewall Rules.",
    code: `Part 1: Preparing the Virtual Environment 
[analyst@secOps ~]$ sudo ./lab.support.files/scripts/configure_as_dhcp.sh 
[analyst@secOps ~]$ sudo ./lab.support.files/scripts/cyberops_extended_topo_no_fw.py

mininet> xterm R1 
[root@secOps analyst]# ./lab.support.files/scripts/start_snort.sh

mininet> xterm H10 
[root@secOps analyst]# ./lab.support.files/scripts/mal_server_start.sh
[root@secOps analyst]# netstat -tunpa 

mininet> xterm R1
[root@sec0ps analyst]# tail -f /var/log/snort/alert

mininet> xterm H5
[root@secOps analyst]# curl -O 209.165.202.133:6666/W32.Nimda.Amm.exe 

Part2
mininet > xterm R1 
[root@secOps ~]# iptables -L -v 
[root@secOps ~]# iptables -I FORWARD -p tcp -d 209.165.202.133 --dport 6666 -j DROP
[root@secOps ~]# iptables -L -v 

mininet> xterm H5
[root@secOps analyst]# curl -O 209.165.202.133:6666/W32.Nimda.Amm.exe 
(It should be failed or should not respond)`,
  },
  {
    title: "Practical No.1",
    aim: "Encrypting and Decrypting Data Using OpenSSL.",
    code: `[analyst@secOps ~]$ cd ./lab.support.files/ 
[analyst@secOps lab.support.files]$ cat letter_to_grandma.txt
[analyst@secOps lab.support.files]$ openssl aes-256-cbc -in letter_to_grandma.txt -out message.enc 
cat message.enc 
[analyst@secOps lab.support.files]$ openssl aes-256-cbc -a -in letter_to_grandma.txt -out message.enc 
cat message.enc
[analyst@secOps lab.support.files]$ openssl aes-256-cbc –a -d -in message.enc -out decrypted_letter.txt
[analyst@secOps lab.support.files]$ cat decrypted_letter.txt`,
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
        style={{ textAlign: "center", marginBottom: "30px", color: "#e0e0e0" }}
      >
        SOC Practicals
      </h1>
      {practicalsData.map((prac, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #333",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
            background: "#1e1e1e",
          }}
        >
          <h2 style={{ marginTop: 0, color: "#66b2ff" }}>{prac.title}</h2>
          <p style={{ color: "#cccccc" }}>
            <strong style={{ color: "#e0e0e0" }}>Aim:</strong> {prac.aim}
          </p>
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
                background: "#222",
                color: "#0f0",
                padding: "15px",
                borderRadius: "6px",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                fontFamily: "monospace",
                paddingTop: "40px",
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
