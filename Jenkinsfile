dockerbookImage=""
node {
    deleteDir()
    sh 'mkdir dockerbook'
    dir('dockerbook') {
        stage('Build storybook') {
            checkout scm
            docker.build('storybook-docker')
        }
    }
    stage('Run and and smoke test') {
        // Build Docker image
        echo 'Test whether you can start it'
        docker.image('storybook-docker').withRun() {
            def ret = sh 'eval $( echo z=`curl -I http://localhost:9009 | grep HTTP > line; cat line| cut -d' ' -f2` )
              if [[ "$z" -eq 200 ]]; then
                echo 'Everything fine'
              else
                exit 1
              fi
            '
        }
    }
    stage('end') {
        println ret
    }
}
