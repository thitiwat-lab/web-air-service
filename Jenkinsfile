pipeline {
  agent {
    docker {
      image 'node:latest'
    }

  }
  stages {
    stage('Testing') {
      steps {
        echo 'Message'
        sh '''#to dir project
cd frontend

#install package
npm install --registry http://192.168.10.170:4873

#run test
npm run test


 '''
        stash(name: 'node_module', includes: 'frontend/node_modules/**/*')
      }
    }

    stage('Building') {
      steps {
        unstash 'node_module'
        sh '''cd frontend

npm run build

npm run export

#to dir project
cd ../backend

#install package
npm install --registry http://192.168.10.170:4873

npm run build







'''
        stash(name: 'out', includes: 'frontend/out/**/*')
        stash(name: 'dist', includes: 'backend/dist/**/*')
      }
    }

    stage('Deploy') {
      steps {
        unstash 'out'
        unstash 'dist'
        script {
          sshPublisher(
            continueOnError: false, failOnError: true,
            publishers: [
              sshPublisherDesc(
                configName: "opendata",
                verbose: true,
                transfers: [
                  sshTransfer(
                    sourceFiles: "frontend/out/**/*",
                    removePrefix: "frontend/out",
                    remoteDirectory: "build/frontend",
                    execCommand: "rm -rf /usr/share/nginx/html/*"
                  ),
                  sshTransfer(
                    execCommand: "cp -r /home/build/frontend/* /usr/share/nginx/html"
                  )
                ]
              )
            ]
          )
        }

        script {
          sshPublisher(
            continueOnError: false, failOnError: true,
            publishers: [
              sshPublisherDesc(
                configName: "opendata",
                verbose: true,
                transfers: [
                  sshTransfer(
                    sourceFiles: "backend/dist/**/*",
                    removePrefix: "backend/dist",
                    remoteDirectory: "build/backend/dist",
                    execCommand: "rm -rf /home/service/dist/*"
                  ),
                  sshTransfer(
                    sourceFiles: "backend/package.json",
                    removePrefix: "backend",
                    remoteDirectory: "build/backend"
                  ),
                  sshTransfer(
                    execCommand: "cp -r /home/build/backend/* /home/service/",
                  ),
                  sshTransfer(
                    execCommand: "cd /home/service/ && npm install && pm2 restart service" ,
                  ),
                ]
              )
            ]
          )
        }

      }
    }

  }
}